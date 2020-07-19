import React from 'react'
import styled from '@xstyled/styled-components'

import HeroWithContent from '../components/HeroWithContent'
import Card from '../components/Card'
import Button from '../components/Button'
import Footer from '../components/Footer'

const HeroHeading = styled.h1`
  font-family: title;
  font-size: 70;
  text-align: center;
  font-weight: 400;
`
const Buttons = styled.div`
  display: flex;
  justify-content: center;
`

const HomeContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CardsTitle = styled.p`
  font-family: title;
  font-size: 60;
  margin-top: 90;
`
const Cards = styled.div`
  display: flex;
  justify-content: center;
`
const CollectionLink = styled.a`
  font-family: title;
  font-size: 30px;
  color: #bdbdbd;
  margin: 20 0 60 0;
`
const Home = () => {
  const topAnime = [7, 3, 2, 1, 4]
  const topManga = [30, 44, 27, 28, 32]
  return (
    <>
      <HeroWithContent shade="whiteShade" title="Home | Saikou">
        <HeroHeading>Where people discuss anime and manga</HeroHeading>
        <Buttons>
          <Button to="/anime" backgroundColor="anime">
            See Anime List
          </Button>
          <Button to="/manga" backgroundColor="manga">
            See Manga List
          </Button>
        </Buttons>
      </HeroWithContent>
      <HomeContents>
        <CardsTitle>Top Anime</CardsTitle>
        <Cards>
          {topAnime.map((id) => (
            <Card id={id} />
          ))}
        </Cards>
        <CollectionLink>See all anime</CollectionLink>
        <CardsTitle>Top Manga</CardsTitle>
        <Cards>
          {topManga.map((id) => (
            <Card id={id} />
          ))}
        </Cards>
        <CollectionLink>See all manga</CollectionLink>
      </HomeContents>
      <Footer></Footer>
    </>
  )
}

export default Home
