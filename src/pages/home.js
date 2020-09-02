import React from 'react'
import styled from '@xstyled/styled-components'
import { Link } from 'react-router-dom'

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
const CollectionLink = styled(Link)`
  font-family: title;
  font-size: 30px;
  color: #bdbdbd;
  margin: 20 0 60 0;
  text-decoration: none;
`
const Home = () => {
  const topAnime = [7, 3, 2, 1, 4]
  const topManga = [7, 3, 2, 1, 4]
  return (
    <>
      <HeroWithContent shade='whiteShade' title='Saikou'>
        <>
          <HeroHeading>Find out The Best Anime and Manga</HeroHeading>
          <Buttons>
            <Button to='/anime' variant='anime'>
              <span>See Anime List</span>
            </Button>
            <Button to='/manga' variant='manga'>
              <span>See Manga List</span>
            </Button>
          </Buttons>
        </>
      </HeroWithContent>
      <HomeContents>
        <CardsTitle>Top Anime</CardsTitle>
        <Cards>
          {topAnime.map((id, index) => (
            <Card id={id} key={index} type='anime' />
          ))}
        </Cards>
        <CollectionLink to='/anime'>See all anime</CollectionLink>
        <CardsTitle>Top Manga</CardsTitle>
        <Cards>
          {topManga.map((id, index) => (
            <Card id={id} key={index} type='manga' />
          ))}
        </Cards>
        <CollectionLink to='/manga'>See all manga</CollectionLink>
      </HomeContents>
      <Footer></Footer>
    </>
  )
}

export default Home
