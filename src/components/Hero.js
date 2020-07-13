import React from 'react'
import styled from '@xstyled/styled-components'
import { backgroundImage, backgroundColor } from '@xstyled/system'

import Navigation from './Navigation'

const BackgroundShade = styled.div`
  ${backgroundColor}
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Background = styled.div`
  height: 35vh;
  background-image: url('/backgrounds/home.jpg');
  background-size: cover;
  position: relative;
  ${backgroundImage}
  background-size: cover;
  background-position: center;
`

const Hero = ({ backgroundImage }) => {
  return (
    <Background backgroundImage={backgroundImage}>
      <BackgroundShade backgroundColor="whiteShade">
        <Navigation></Navigation>
      </BackgroundShade>
    </Background>
  )
}

export default Hero
