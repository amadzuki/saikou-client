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
  margin: 70px 0;
`

const MangaCollection = () => {
  const MangaCovers = CardCovers.filter((cover) => cover.type === 'manga')
  return (
    <Layout backgroundImage="url('/backgrounds/mangaCollection.jpg')">
      <SearchBar></SearchBar>
      <Cards>
        {MangaCovers.map((cover, index) => (
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

export default MangaCollection
