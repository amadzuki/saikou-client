import React from 'react'
import styled from '@xstyled/styled-components'

import Layout from '../components/Layout'
import Card from '../components/Card'

const HomeContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CardsTitle = styled.p`
  font-family: title;
  font-size: 60px;
  margin-top: 90px;
`
const Cards = styled.div`
  display: flex;
  justify-content: center;
`
const CollectionLink = styled.a`
  font-family: title;
  font-size: 30px;
  color: #bdbdbd;
  margin: 20px 0 60px 0;
`
const Home = () => {
  return (
    <Layout>
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
    </Layout>
  )
}

export default Home
