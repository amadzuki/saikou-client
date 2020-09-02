import {
  GET_ALL_ANIME_START,
  GET_ALL_ANIME_SUCCESS,
  GET_ALL_ANIME_FAILURE,
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

export { getAllAnime }
