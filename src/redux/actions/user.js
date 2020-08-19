import {
  SET_USER,
  RESET_USER,
  SET_FAVORITE_ANIME,
  SET_FAVORITE_MANGA,
  SET_UNFAVORITE_ANIME,
  SET_UNFAVORITE_MANGA,
} from './types'

const setUser = (userData) => ({
  type: SET_USER,
  payload: userData,
})

const resetUser = () => ({
  type: RESET_USER,
})

const toggleFavoriteAnime = (id, isFavorited) => {
  if (isFavorited) {
    return {
      type: SET_UNFAVORITE_ANIME,
      payload: { id: id },
    }
  } else {
    return {
      type: SET_FAVORITE_ANIME,
      payload: { id: id },
    }
  }
}
const toggleFavoriteManga = (id, isFavorited) => {
  if (isFavorited) {
    return {
      type: SET_UNFAVORITE_MANGA,
      payload: { id: id },
    }
  } else {
    return {
      type: SET_FAVORITE_MANGA,
      payload: { id: id },
    }
  }
}

export { setUser, resetUser, toggleFavoriteAnime, toggleFavoriteManga }
