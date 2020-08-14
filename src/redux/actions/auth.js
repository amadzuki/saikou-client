import { AUTHENTICATE, DEAUTHENTICATE } from '../actions/types'

const authenticate = (accessToken) => ({
  type: AUTHENTICATE,
  accessToken: accessToken,
})

const deauthenticate = () => ({
  type: DEAUTHENTICATE,
})

export { authenticate, deauthenticate }
