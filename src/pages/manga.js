import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import styled from '@xstyled/styled-components'

import Layout from '../components/Layout'
import SearchBar from '../components/SearchBar'
import CardContainer from '../containers/CardContainer'

import { getAllManga } from '../redux/actions'

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

const MangaCollection = ({ mangaState, getAllManga }) => {
  const { isLoading, data } = mangaState
  useEffect(() => {
    getAllManga()
  }, [getAllManga])
  return (
    <Layout
      backgroundImage="url('/backgrounds/one-piece.jpg')"
      title='Manga Collection | Saikou'
    >
      <>
        <SearchBar></SearchBar>
        {isLoading && (
          <Contents>
            <Title>now loading</Title>
          </Contents>
        )}
        {!isLoading && data.length > 0 && (
          <Cards>
            {data.map((cover, index) => (
              <CardContainer key={index} id={cover.id} type='manga' />
            ))}
          </Cards>
        )}
      </>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    mangaState: state.allManga,
  }
}

MangaCollection.propTypes = {
  mangaState: PropTypes.object,
  getAllManga: PropTypes.func,
}

export default connect(mapStateToProps, { getAllManga })(MangaCollection)
