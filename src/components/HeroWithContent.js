import React from 'react'
import styled from '@xstyled/styled-components'
import { height, backgroundImage, backgroundColor } from '@xstyled/system'

import AppHelmet from './AppHelmet'
import Navigation from './Navigation'

const BackgroundShade = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${backgroundColor}
`

const Background = styled.div`
  height: 100vh;
  background-image: url('/backgrounds/home.jpg');
  background-size: cover;
  position: relative;
  ${backgroundImage}
  ${height}
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

const HeroWithContent = ({ height, children, shade, title }) => {
  const navBackground = shade === 'whiteShade' ? 'transparent' : 'whiteShade'
  return (
    <>
      <AppHelmet title={title}></AppHelmet>
      <Background height={height}>
        <BackgroundShade backgroundColor={shade}>
          <Navigation shade={navBackground}></Navigation>
          <HeroContent>
            <HeroAction>{children}</HeroAction>
          </HeroContent>
        </BackgroundShade>
      </Background>
    </>
  )
}

export default HeroWithContent
