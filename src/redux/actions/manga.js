import {
  GET_ALL_MANGA_START,
  GET_ALL_MANGA_SUCCESS,
  GET_ALL_MANGA_FAILURE,
} from './types'

import delay from '../../utils/timer'
import requests from '../../utils/requests'

const getAllManga = () => async (dispatch) => {
  dispatch({ type: GET_ALL_MANGA_START })
  await delay(3000)

  try {
    const allManga = await requests.getManga()
    dispatch({ type: GET_ALL_MANGA_SUCCESS, payload: allManga })
  } catch (error) {
    dispatch({ type: GET_ALL_MANGA_FAILURE, payload: error })
  }
}

export { getAllManga }
