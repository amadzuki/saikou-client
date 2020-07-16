import React from 'react'
import styled from '@xstyled/styled-components'

import Layout from '../components/Layout'
import SearchBar from '../components/SearchBar'
import Card from '../components/Card'

import products from '../data/products.json'

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 70px 0;
`

const MangaCollection = () => {
  const MangaCovers = products.filter((cover) => cover.type === 'manga')
  return (
    <Layout backgroundImage="url('/backgrounds/one-piece.jpg')">
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
