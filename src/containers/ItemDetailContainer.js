import React, { useEffect } from 'react'
import { PropTypes } from 'prop-types'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import { ItemDetail, CenterContent, TitleText } from '../components'

import {
  toggleFavorite,
  getAnimeDetails,
  getMangaDetails,
} from '../redux/actions'

const ItemDetailContainer = ({
  type,
  userFavoriteAnime,
  userFavoriteManga,
  animeState,
  mangaState,
  toggleFavorite,
  getAnimeDetails,
  getMangaDetails,
  isAuthenticated,
}) => {
  const { id } = useParams()
  const { isLoading, data } = type === 'manga' ? mangaState : animeState
  const isFavorited =
    type === 'anime'
      ? userFavoriteAnime.includes(+id)
      : userFavoriteManga.includes(+id)

  console.log(isFavorited)
  useEffect(() => {
    if (type === 'anime') {
      getAnimeDetails(id)
    } else if (type === 'manga') {
      getMangaDetails(id)
    }
  }, [getAnimeDetails, getMangaDetails, id, type])
  console.log(data)
  return (
    <>
      {isLoading && (
        <CenterContent>
          <TitleText text='Casting Genjutsu' />
        </CenterContent>
      )}
      {!isLoading && data && (
        <ItemDetail
          isFavorited={isFavorited}
          toggleFavorite={toggleFavorite}
          item={data}
          type={type}
          isAuthenticated={isAuthenticated}
        ></ItemDetail>
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    userFavoriteAnime: state.user.data.favoriteAnime || [],
    userFavoriteManga: state.user.data.favoriteManga || [],
    isAuthenticated: state.auth.isAuthenticated,
    animeState: state.anime,
    mangaState: state.manga,
  }
}

ItemDetailContainer.propTypes = {
  userFavoriteAnime: PropTypes.array.isRequired,
  userFavoriteManga: PropTypes.array.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  animeState: PropTypes.object.isRequired,
  mangaState: PropTypes.object.isRequired,
  getAnimeDetails: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, {
  toggleFavorite,
  getAnimeDetails,
  getMangaDetails,
})(ItemDetailContainer)
