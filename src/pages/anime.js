import React from 'react'
import styled from '@xstyled/styled-components'

import Layout from '../components/Layout'
import SearchBar from '../components/SearchBar'
import Card from '../components/Card'

import CardCovers from '../data/CardCovers.json'

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 70px 5vw;
`

const AnimeCollection = () => {
  const AnimeCovers = CardCovers.filter((cover) => cover.type === 'anime')
  return (
    <Layout backgroundImage="url('/backgrounds/animeCollection.jpg')">
      <SearchBar></SearchBar>
      <Cards>
        {AnimeCovers.map((cover, index) => (
          <Card
            key={index}
            imagesrc={cover.imageSrc}
            imagealt={cover.imageAlt}
            name={cover.name}
          />
        ))}
      </Cards>
    </Layout>
  )
}

export default AnimeCollection
