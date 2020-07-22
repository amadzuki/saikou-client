const initialState = {
  isAuthenticated: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ISAUTHENTICATED_TRUE':
      return {
        ...state,
        isAuthenticated: true,
      }

    case 'ISAUTHENTICATED_FALSE':
      return {
        ...state,
        isAuthenticated: false,
      }
    default:
      return state
  }
}

export default authReducer
