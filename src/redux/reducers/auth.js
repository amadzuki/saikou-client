import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_START,
  LOGOUT_SUCCESS,
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

    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        data: action.payload,
      }

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }

    case LOGOUT_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      }

    case LOGOUT_SUCCESS:
      return {
        ...initialState,
      }

    default:
      return state
  }
}

export default auth
