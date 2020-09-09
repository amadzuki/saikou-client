import {
  SET_USER,
  RESET_USER,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from '../actions/types'

const initialState = {
  isLoading: false,
  error: null,
  data: {},
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        data: action.payload,
      }

    case RESET_USER:
      return {
        ...initialState,
      }

    case UPDATE_USER_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      }

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }

    case UPDATE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export default user
