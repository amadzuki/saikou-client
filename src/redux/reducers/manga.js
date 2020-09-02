import {
  GET_ALL_MANGA_START,
  GET_ALL_MANGA_SUCCESS,
  GET_ALL_MANGA_FAILURE,
} from '../actions/types'

const initialState = {
  isLoading: false,
  error: null,
  data: {},
}

const manga = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MANGA_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case GET_ALL_MANGA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case GET_ALL_MANGA_FAILURE:
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
