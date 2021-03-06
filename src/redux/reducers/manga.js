import {
  GET_MANGA_DETAIL_START,
  GET_MANGA_DETAIL_FAILURE,
  GET_MANGA_DETAIL_SUCCESS,
  UPDATE_MANGA_DETAIL_START,
  UPDATE_MANGA_DETAIL_SUCCESS,
  UPDATE_MANGA_DETAIL_FAILURE,
} from '../actions/types'

const initialState = {
  isLoading: false,
  error: null,
  data: {},
}

const manga = (state = initialState, action) => {
  switch (action.type) {
    case GET_MANGA_DETAIL_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case GET_MANGA_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case GET_MANGA_DETAIL_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }

    case UPDATE_MANGA_DETAIL_START:
      return {
        ...state,
        isLoading: false,
        error: null,
      }
    case UPDATE_MANGA_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case UPDATE_MANGA_DETAIL_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default manga
