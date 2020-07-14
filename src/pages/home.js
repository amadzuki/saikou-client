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
  return (
    <>
      <HeroWithContent shade="whiteShade">
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
          <Card
            imagesrc="./covers/Hagane-no-Renkinjutsushi-Fullmetal-Alchemist.jpg"
            imagealt="Fullmetal Alchemist anime cover"
            name="Fullmetal Alchemist: Brotherhood"
          />
          <Card
            imagesrc="./covers/Death-Note.jpg"
            imagealt="Death Note anime cover"
            name="Death Note"
          />
          <Card
            imagesrc="./covers/Code-Geass-Hangyaku-no-Lelouch.jpg"
            imagealt="Code Geass anime cover"
            name="Code Geass"
          />
          <Card
            imagesrc="./covers/Black-Clover.jpg"
            imagealt="Black Clover anime cover"
            name="Black Clover"
          />
          <Card
            imagesrc="./covers/Dr-STONE.jpg"
            imagealt="Dr STONE anime cover"
            name="Dr. STONE"
          />
        </Cards>
        <CollectionLink>See all anime</CollectionLink>
        <CardsTitle>Top Manga</CardsTitle>
        <Cards>
          <Card
            imagesrc="./covers/Death-Note-Manga.jpg"
            imagealt="Death Note manga cover"
            name="Death Note"
          />
          <Card
            imagesrc="./covers/manga_One-Punch-Man.jpg"
            imagealt="One Punch-Man manga cover"
            name="One Punch-Man"
          />
          <Card
            imagesrc="./covers/Berserk.jpg"
            imagealt="Berserk manga cover"
            name="Berserk"
          />
          <Card
            imagesrc="./covers/Black-Clover.png"
            imagealt="Black Clover manga cover"
            name="Black Clover"
          />
          <Card
            imagesrc="./covers/Dr.-STONE.jpg"
            imagealt="Dr STONE manga cover"
            name="Dr. STONE"
          />
        </Cards>
        <CollectionLink>See all manga</CollectionLink>
      </HomeContents>
      <Footer></Footer>
    </>
  )
}

export default Home
