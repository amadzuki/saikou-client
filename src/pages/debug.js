import React, { useState, useEffect } from 'react'
import styled from '@xstyled/styled-components'
import PropTypes from 'prop-types'
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

const Debug = ({ isAuthenticated, accessToken }) => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])
  const [anime, setAnime] = useState({})
  const [allAnime, setAllAnime] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await requests.debugFetch('/users')
      setUsers(response.data.data)
    }
    fetchData()
    if (isAuthenticated) {
      const fetchUserById = async (accessToken) => {
        const response = await requests.getUserData(accessToken)
        setUser(response)
      }
      fetchUserById(accessToken)
    }

    const fetchAllAnime = async () => {
      const response = await requests.getAnime()
      setAllAnime(response)
    }
    fetchAllAnime()
    ;(async (id) => {
      const response = await requests.getAnimeById(+id)
      setAnime(response)
    })(1)
  }, [accessToken, isAuthenticated])

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
          {isAuthenticated && (
            <ul>
              <li>id: {user.id}</li>
              <li>alias: {user.alias}</li>
              <li>avatar path: {user.avatar}</li>
              <li>date joined: {user.createdAt}</li>
            </ul>
          )}
          {!isAuthenticated && <h4>user is not authenticated</h4>}
        </div>
      </TextContainer>
      <TextContainer>
        <h3>Get All Anime</h3>
        <ul>
          {allAnime.map((anime, index) => (
            <li key={index}>{anime.name}</li>
          ))}
        </ul>
      </TextContainer>
      <TextContainer>
        <h3>Get Anime Details by ID</h3>
        <ul>
          <li>id: {anime.id}</li>
          <li>name: {anime.name}</li>
          <li>coverUrl: {anime.coverUrl}</li>
        </ul>
      </TextContainer>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    accessToken: state.auth.data.accessToken,
  }
}

Debug.propTypes = {
  accessToken: PropTypes.string,
  isAuthenticated: PropTypes.bool,
}

export default connect(mapStateToProps)(Debug)
