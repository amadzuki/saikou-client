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
const AboutParagraph = styled.p`
  width: 800;
  font-family: paragraph;
  font-size: 24;
`
const About = () => {
  return (
    <>
      <HeroWithContent height="50vh" shade="whiteShade">
        <HeroHeading>About Saikou</HeroHeading>
      </HeroWithContent>
      <TextContainer>
        <AboutParagraph>
          Saikou is an international community for anime and manga enthusiasts.
          You can join as a member to discover, favorite, leave some reviews,
          and discuss with other otaku.
        </AboutParagraph>
        <AboutParagraph>
          This site is inspired by MyAnimeList, AniList, VIZ Media, and other
          related pop culture communities. But Saikou is more focused on the
          simplest experience as possible.
        </AboutParagraph>
        <AboutParagraph>
          Saikou is a join project by Ahmad Marzuki and M Haidar Hanif, which
          created as a special portfolio in the Azobu Mentorship program.
        </AboutParagraph>
      </TextContainer>
      <Footer></Footer>
    </>
  )
}

export default About
