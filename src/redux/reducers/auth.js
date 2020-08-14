import { AUTHENTICATE, DEAUTHENTICATE } from '../actions/types'

const initialState = {
  isAuthenticated: false,
  accessToken: '',
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        isAuthenticated: true,
        accessToken: action.accessToken,
      }

    case DEAUTHENTICATE:
      return {
        ...state,
        isAuthenticated: false,
        accessToken: '',
      }
    default:
      return state
  }
}

export default auth
