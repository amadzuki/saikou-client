import { SET_USER, RESET_USER } from './types'

const setUser = (userData) => ({
  type: SET_USER,
  payload: userData,
})

const resetUser = () => ({
  type: RESET_USER,
})

export { setUser, resetUser }
