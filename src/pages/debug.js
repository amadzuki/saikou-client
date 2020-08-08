import React, { useState, useEffect } from 'react'
import styled from '@xstyled/styled-components'

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

const Debug = () => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await requests.debugFetch('/users')
      setUsers(response.data.users)
    }
    fetchData()
    const fetchUserById = async () => {
      const response = await requests.getUserData(1)
      setUser(response)
    }
    fetchUserById()
  }, [])

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
          <h3>User by id 1 from API:</h3>
          <ul>
            <li>id: {user.id}</li>
            <li>alias: {user.alias}</li>
            <li>avatar path: {user.avatar}</li>
            <li>date joined: {user.dateJoined}</li>
          </ul>
        </div>
      </TextContainer>
    </>
  )
}

export default Debug
