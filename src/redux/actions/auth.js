import { push } from 'connected-react-router'

import {
  AUTHENTICATE,
  DEAUTHENTICATE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../actions/types'

import requests from '../../utils/requests'

import delay from '../../utils/timer'

const register = (email, password) => async (dispatch) => {
  dispatch({ type: REGISTER_START })
  await delay(500)

  try {
    const response = await requests.register(email, password)
    dispatch({ type: REGISTER_SUCCESS, payload: response })
    dispatch(push('/login'))
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error })
  }
}

const authenticate = (accessToken) => ({
  type: AUTHENTICATE,
  payload: { accessToken: accessToken },
})

const deauthenticate = () => ({
  type: DEAUTHENTICATE,
})

export { authenticate, deauthenticate, register }
