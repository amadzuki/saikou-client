import { SET_USER } from './types'

const setUser = (userData) => ({
  type: SET_USER,
  payload: userData,
})

export { setUser }
