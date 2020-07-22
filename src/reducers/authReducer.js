const initialState = {
  isAuthorized: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ISAUTHORIZED_TRUE':
      return {
        ...state,
        isAuthorized: true,
      }

    case 'ISAUTHORIZED_FALSE':
      return {
        ...state,
        isAuthorized: false,
      }
    default:
      return state
  }
}

export default authReducer
