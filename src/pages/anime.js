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
  padding: 70px 5vw;
`

const AnimeCollection = () => {
  const AnimeCovers = products.filter((cover) => cover.type === 'anime')
  return (
    <Layout backgroundImage="url('/backgrounds/one-punch-man.jpg')">
      <SearchBar></SearchBar>
      <Cards>
        {AnimeCovers.map((cover, index) => (
          <Card key={index} id={cover.id} />
        ))}
      </Cards>
    </Layout>
  )
}

export default AnimeCollection
