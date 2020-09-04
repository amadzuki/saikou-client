import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/styled-components'
import { height } from '@xstyled/system'

import AppHelmet from './AppHelmet'
import Navigation from './Navigation'

const BackgroundShade = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &.whiteShade {
    background-color: whiteShade;
  }
`

const Background = styled.div`
  height: 100vh;
  background-image: url('/backgrounds/home.jpg');
  background-size: cover;
  position: relative;
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
  align-items: center;
`

const HeroWithContent = ({ height, children, shade, title }) => {
  const navBackground = shade === 'whiteShade' ? 'transparent' : 'whiteShade'
  return (
    <>
      <AppHelmet title={title}></AppHelmet>
      <Background height={height}>
        <BackgroundShade className={shade}>
          <Navigation shade={navBackground}></Navigation>
          <HeroContent>
            <HeroAction>{children}</HeroAction>
          </HeroContent>
        </BackgroundShade>
      </Background>
    </>
  )
}

HeroWithContent.propTypes = {
  height: PropTypes.string,
  children: PropTypes.element,
  shade: PropTypes.string,
  title: PropTypes.string,
}

export default HeroWithContent
