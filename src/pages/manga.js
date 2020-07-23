import React from 'react'
import styled from '@xstyled/styled-components'

import Layout from '../components/Layout'
import SearchBar from '../components/SearchBar'
import Card from '../components/Card'

import items from '../data/items.json'

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 70px 5vw;
`

const MangaCollection = () => {
  const MangaCovers = items.filter((cover) => cover.type === 'manga')
  return (
    <Layout
      backgroundImage="url('/backgrounds/one-piece.jpg')"
      title='Manga Collection | Saikou'
    >
      <SearchBar></SearchBar>
      <Cards>
        {MangaCovers.map((cover, index) => (
          <Card key={index} id={cover.id} />
        ))}
      </Cards>
    </Layout>
  )
}

export default MangaCollection
