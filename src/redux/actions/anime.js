import {
  GET_ALL_ANIME_START,
  GET_ALL_ANIME_SUCCESS,
  GET_ALL_ANIME_FAILURE,
  GET_ANIME_DETAIL_START,
  GET_ANIME_DETAIL_SUCCESS,
  GET_ANIME_DETAIL_FAILURE,
} from './types'

import delay from '../../utils/timer'
import requests from '../../utils/requests'

const getAllAnime = () => async (dispatch) => {
  dispatch({ type: GET_ALL_ANIME_START })
  await delay(3000)

  try {
    const allAnime = await requests.getAnime()
    dispatch({ type: GET_ALL_ANIME_SUCCESS, payload: allAnime })
  } catch (error) {
    dispatch({ type: GET_ALL_ANIME_FAILURE, payload: error })
  }
}

const getAnimeDetails = (id) => async (dispatch) => {
  dispatch({ type: GET_ANIME_DETAIL_START })

  try {
    const animeDetails = await requests.getAnimeById(+id)
    dispatch({ type: GET_ANIME_DETAIL_SUCCESS, payload: animeDetails })
  } catch (error) {
    dispatch({ type: GET_ANIME_DETAIL_FAILURE, payload: error })
  }
}

export { getAllAnime, getAnimeDetails }
