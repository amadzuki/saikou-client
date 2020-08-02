const initialState = {
  isAuthenticated: false,
  accessToken: '',
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ISAUTHENTICATED_TRUE':
      return {
        ...state,
        isAuthenticated: true,
        accessToken: action.accessToken,
      }

    case 'DEAUTHENTICATE':
      return {
        ...state,
        isAuthenticated: false,
        accessToken: '',
      }
    default:
      return state
  }
}

export default authReducer
