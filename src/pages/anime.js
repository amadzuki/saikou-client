import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import styled from '@xstyled/styled-components'

import Layout from '../components/Layout'
import SearchBar from '../components/SearchBar'
import CardContainer from '../containers/CardContainer'
import StylishLoader from '../components/StylishLoader'

import { getAllAnime } from '../redux/actions'
import { useEffect } from 'react'

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 70px 5vw;
`

const Contents = styled.div`
  width: 100vw;
  height: 100vh;
`
const Title = styled.h2`
  font-family: title;
  font-weight: 400;
  padding: auto;
`

const AnimeCollection = ({ allAnimeState, getAllAnime }) => {
  const { isLoading, data } = allAnimeState
  useEffect(() => {
    getAllAnime()
  }, [getAllAnime])
  return (
    <Layout
      backgroundImage="url('/backgrounds/one-punch-man.jpg')"
      title='Anime Collection | Saikou'
    >
      <>
        <SearchBar></SearchBar>
        {isLoading && (
          <Contents>
            <Title>Casting Genjutsu</Title>
            <StylishLoader></StylishLoader>
          </Contents>
        )}
        {!isLoading && data.length > 0 && (
          <Cards>
            {data.map((cover, index) => (
              <CardContainer key={index} id={cover.id} type='anime' />
            ))}
          </Cards>
        )}
      </>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    allAnimeState: state.allAnime,
  }
}

AnimeCollection.propTypes = {
  allAnimeState: PropTypes.object,
  getAllAnime: PropTypes.func,
}

export default connect(mapStateToProps, { getAllAnime })(AnimeCollection)
