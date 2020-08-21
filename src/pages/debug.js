import React, { useState, useEffect } from 'react'
import styled from '@xstyled/styled-components'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import HeroWithContent from '../components/HeroWithContent'

import requests from '../utils/requests'

const HeroHeading = styled.h1`
  font-family: title;
  font-size: 75;
  font-weight: 400;
  text-align: center;
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 35 0 130 0;
`

const Debug = ({ accessToken }) => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await requests.debugFetch('/users')
      setUsers(response.data.users)
    }
    fetchData()
    const fetchUserById = async (accessToken) => {
      const response = await requests.getUserData(accessToken)
      setUser(response)
    }
    fetchUserById(accessToken)
  }, [accessToken])

  return (
    <>
      <HeroWithContent height='50vh' shade='whiteShade' title='DEBUG MODE'>
        <HeroHeading>DEBUG MODE</HeroHeading>
      </HeroWithContent>
      <TextContainer>
        <div>
          <h3>Users from API:</h3>
          <ul>
            {users.map((user, index) => {
              return <li key={index}>{user.email}</li>
            })}
          </ul>
        </div>
      </TextContainer>
      <TextContainer>
        <div>
          <h3>Get user profile with token from API:</h3>
          <ul>
            <li>id: {user.id}</li>
            <li>alias: {user.alias}</li>
            <li>avatar path: {user.avatar}</li>
            <li>date joined: {user.createdAt}</li>
          </ul>
        </div>
      </TextContainer>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    accessToken: state.auth.accessToken,
  }
}

Debug.propTypes = {
  accessToken: PropTypes.string,
}

export default connect(mapStateToProps)(Debug)
