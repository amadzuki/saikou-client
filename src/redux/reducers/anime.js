import {
  GET_ALL_ANIME_START,
  GET_ALL_ANIME_SUCCESS,
  GET_ALL_ANIME_FAILURE,
} from '../actions/types'

const initialState = {
  isLoading: false,
  error: null,
  data: [],
}

const anime = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ANIME_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case GET_ALL_ANIME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case GET_ALL_ANIME_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default anime
