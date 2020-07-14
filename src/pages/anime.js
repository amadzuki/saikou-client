import React from 'react'
import styled from '@xstyled/styled-components'

import Layout from '../components/Layout'
import SearchBar from '../components/SearchBar'

const AnimeCollection = () => {
  return (
    <Layout backgroundImage="url('/backgrounds/animeCollection.jpg')">
      <SearchBar></SearchBar>
    </Layout>
  )
}

export default AnimeCollection
