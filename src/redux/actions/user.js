import {
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from './types'

import requests from '../../utils/requests'
import delay from '../../utils/timer'

const toggleFavorite = (id, itemType, isFavorited) => async (
  dispatch,
  getState
) => {
  const state = getState()
  const accessToken = state.auth.data.accessToken

  dispatch({ type: UPDATE_USER_START })
  await delay(500)

  const favorites =
    itemType === 'anime'
      ? state.user.data.favoriteAnime
      : state.user.data.favoriteManga

  const updatedFavorites = !isFavorited
    ? [...favorites, id]
    : favorites.filter((itemId) => itemId !== id)

  const body = {}

  if (itemType === 'anime') {
    body.favoriteAnime = updatedFavorites
  } else {
    body.favoriteManga = updatedFavorites
  }

  try {
    const response = await requests.updateUserProfile(accessToken, body)
    dispatch({ type: UPDATE_USER_SUCCESS, payload: response })
  } catch (error) {
    dispatch({ type: UPDATE_USER_FAILURE, payload: error })
  }
}

export { toggleFavorite }
