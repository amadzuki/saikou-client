import React from 'react'
import styled from '@xstyled/styled-components'

import { HeroWithContent, Footer, Button } from '../components'

const HeadingText = styled.h1`
  font-family: title;
  font-size: 40;
  font-weight: 400;
  margin: 20 0;

  &.big {
    font-size: 55;
    margin: 0;
  }
`

const PartingImage = styled.img`
  margin-top: 30;
  height: 250;
`

const Logout = () => {
  return (
    <>
      <HeroWithContent shade='whiteShade'>
        <>
          <HeadingText>You've logged out</HeadingText>
          <PartingImage
            src='/misc/logout-chibi.png'
            alt='Parting Chibi Miku Image'
          />
          <HeadingText className='big'>mata ne~</HeadingText>
          <Button to='/' variant='primary'>
            <span>go to home page</span>
          </Button>
        </>
      </HeroWithContent>
      <Footer></Footer>
    </>
  )
}

export default Logout
