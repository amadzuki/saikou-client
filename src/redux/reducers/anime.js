import {
  GET_ANIME_DETAIL_START,
  GET_ANIME_DETAIL_SUCCESS,
  GET_ANIME_DETAIL_FAILURE,
  UPDATE_ANIME_DETAIL_START,
  UPDATE_ANIME_DETAIL_SUCCESS,
  UPDATE_ANIME_DETAIL_FAILURE,
} from '../actions/types'

const initialState = {
  isLoading: false,
  error: null,
  data: {},
}

const anime = (state = initialState, action) => {
  switch (action.type) {
    case GET_ANIME_DETAIL_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case GET_ANIME_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case GET_ANIME_DETAIL_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }

    case UPDATE_ANIME_DETAIL_START:
      return {
        ...state,
        isLoading: false,
        error: null,
      }
    case UPDATE_ANIME_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case UPDATE_ANIME_DETAIL_FAILURE:
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
