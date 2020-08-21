import {
  AUTHENTICATE,
  DEAUTHENTICATE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../actions/types'

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  error: null,
  data: {},
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      }

    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      }

    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }

    case AUTHENTICATE:
      return {
        ...state,
        isAuthenticated: true,
        data: action.payload,
      }

    case DEAUTHENTICATE:
      return {
        ...state,
        isAuthenticated: false,
        data: {},
      }
    default:
      return state
  }
}

export default auth
