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

const Title = styled.p`
  font-family: title;
  font-size: 70;
  text-align: center;
`

const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const HeroAction = styled.div`
  width: 800;
  display: flex;
  flex-direction: column;
`
const Buttons = styled.div`
  display: flex;
  justify-content: center;
`

const Hero = () => {
  return (
    <Background>
      <Navigation></Navigation>
      <HeroContent>
        <HeroAction>
          <Title>Where people discuss anime and manga</Title>
          <Buttons>
            <Button backgroundColor="anime">See Anime List</Button>
            <Button backgroundColor="manga">See Manga List</Button>
          </Buttons>
        </HeroAction>
      </HeroContent>
    </Background>
  )
}

export default Hero
