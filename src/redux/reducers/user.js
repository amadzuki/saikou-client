import { SET_USER } from '../actions/types'

const initialState = {
  id: 0,
  alias: '',
  avatar: '',
  dateJoined: '',
  bio: '',
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const { id, alias, avatar, createdAt, bio } = action.payload
      return {
        ...state,
        id: id,
        alias: alias,
        avatar: avatar,
        dateJoined: createdAt,
        bio: bio,
      }
    default:
      return state
  }
}

export default user
