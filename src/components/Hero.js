import React from 'react'
import styled from '@xstyled/styled-components'

import Navigation from './Navigation'
import Button from './Button'

const Background = styled.div`
  height: 100vh;
  background-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url('/backgrounds/home.jpg');
  background-size: cover;
`

const Hero = () => {
  return (
    <Background>
      <Navigation></Navigation>
      <Button variant="primary">See Anime List</Button>
      <Button variant="secondary">See Manga List</Button>
    </Background>
  )
}

export default Hero
