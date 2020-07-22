import React from 'react'
import styled from '@xstyled/styled-components'

import HeroWithContent from '../components/HeroWithContent'
import Footer from '../components/Footer'

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
  text-align: center;
  margin: 35 0 130 0;
`

const About = () => {
  return (
    <>
      <HeroWithContent height='50vh' shade='whiteShade' title='DEBUG MODE'>
        <HeroHeading>DEBUG MODE</HeroHeading>
      </HeroWithContent>
      <TextContainer>
        <p>DEBUG_MODE</p>
      </TextContainer>
    </>
  )
}

export default About
