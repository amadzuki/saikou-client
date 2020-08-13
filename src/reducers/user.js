const initialState = {
  id: 0,
  alias: '',
  avatar: '',
  dateJoined: '',
  bio:
    "I'm too busy watching anime and reading manga that I don't bother edit my own bio. Even when the edit profile button is just few pixels away",
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      const { id, alias, avatar, createdAt } = action.payload
      return {
        ...state,
        id: id,
        alias: alias,
        avatar: avatar,
        dateJoined: createdAt,
      }
    default:
      return state
  }
}

export default user
