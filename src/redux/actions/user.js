import {
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_ANIME_DETAIL_START,
  UPDATE_ANIME_DETAIL_SUCCESS,
  UPDATE_ANIME_DETAIL_FAILURE,
  UPDATE_MANGA_DETAIL_START,
  UPDATE_MANGA_DETAIL_SUCCESS,
  UPDATE_MANGA_DETAIL_FAILURE,
} from './types'

import requests from '../../utils/requests'
import delay from '../../utils/timer'

const toggleFavorite = (_id, id, itemType, isFavorited) => async (
  dispatch,
  getState
) => {
  const state = getState()
  const accessToken = state.auth.data.accessToken

  dispatch({ type: UPDATE_USER_START })
  if (itemType === 'anime') {
    dispatch({ type: UPDATE_ANIME_DETAIL_START })
  } else {
    dispatch({ type: UPDATE_MANGA_DETAIL_START })
  }
  await delay(500)

  const favorites =
    itemType === 'anime'
      ? state.user.data.favoriteAnime.map((item) => item._id)
      : state.user.data.favoriteManga.map((item) => item._id)

  const updatedFavorites = !isFavorited
    ? [...favorites, _id]
    : favorites.filter((id) => id !== _id)

  const body = {}

  if (itemType === 'anime') {
    body.favoriteAnime = updatedFavorites
  } else {
    body.favoriteManga = updatedFavorites
  }
  try {
    const responseUser = await requests.updateUserProfile(accessToken, body)
    const responseItem = await requests.updateItem(accessToken, itemType, id, {
      favorited: !isFavorited,
    })
    dispatch({ type: UPDATE_USER_SUCCESS, payload: responseUser })
    if (itemType === 'anime') {
      dispatch({
        type: UPDATE_ANIME_DETAIL_SUCCESS,
        payload: responseItem.anime,
      })
    } else {
      dispatch({
        type: UPDATE_MANGA_DETAIL_SUCCESS,
        payload: responseItem.manga,
      })
    }
  } catch (error) {
    dispatch({ type: UPDATE_USER_FAILURE, payload: error })
    if (itemType === 'anime') {
      dispatch({ type: UPDATE_ANIME_DETAIL_FAILURE, payload: error })
    } else {
      dispatch({ type: UPDATE_MANGA_DETAIL_FAILURE, payload: error })
    }
  }
}

const fetchLatestData = (accessToken) => async (dispatch) => {
  dispatch({ type: UPDATE_USER_START })
  await delay(500)

  try {
    const response = await requests.getUserData(accessToken)
    dispatch({ type: UPDATE_USER_SUCCESS, payload: response })
  } catch (error) {
    dispatch({ type: UPDATE_USER_FAILURE, payload: error })
  }
}

export { toggleFavorite, fetchLatestData }
