import React, { useEffect } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import { getAllAnime, getAllManga } from '../redux/actions'

import { StylishLoader } from '../components'
import { CardContainer } from './'

const TopItemContainer = ({
  topArray,
  type,
  allAnimeState,
  allMangaState,
  getAllAnime,
  getAllManga,
}) => {
  const { isLoading, data } = type === 'anime' ? allAnimeState : allMangaState

  useEffect(() => {
    if (type === 'anime') {
      getAllAnime()
    } else if (type === 'manga') {
      getAllManga()
    }
  }, [getAllManga, getAllAnime, type])

  return (
    <>
      {isLoading && <StylishLoader></StylishLoader>}
      {!isLoading &&
        data &&
        data.length > 0 &&
        topArray.map((id, index) => (
          <CardContainer id={id} key={index} type={type} />
        ))}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    allAnimeState: state.allAnime,
    allMangaState: state.allManga,
  }
}

TopItemContainer.propTypes = {
  topArray: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  allAnimeState: PropTypes.object.isRequired,
  allMangaState: PropTypes.object.isRequired,
  getAllManga: PropTypes.func.isRequired,
  getAllAnime: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { getAllAnime, getAllManga })(
  TopItemContainer
)
