import React from 'react'
import styled from '@xstyled/styled-components'
import { height, backgroundImage } from '@xstyled/system'

import Navigation from './Navigation'

const BackgroundShade = styled.div`
  background-color: ${(props) =>
    props.shade === 'whiteShade' ? 'rgba(255,255,255, 0.7)' : 'transparent'};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

const HeroWithContent = ({ height, children, shade }) => {
  return (
    <Background height={height}>
      <BackgroundShade shade={shade}>
        <Navigation></Navigation>
        <HeroContent>
          <HeroAction>{children}</HeroAction>
        </HeroContent>
      </BackgroundShade>
    </Background>
  )
}

export default HeroWithContent
