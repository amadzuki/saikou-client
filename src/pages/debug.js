import React, { useState, useEffect } from 'react'
import styled from '@xstyled/styled-components'

import HeroWithContent from '../components/HeroWithContent'

import fetch from '../utils/fetch'

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

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/users')
      setUsers(response.data.users)
    }
    fetchData()
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
              return <li key={index}>{user}</li>
            })}
          </ul>
        </div>
      </TextContainer>
    </>
  )
}

export default Debug
