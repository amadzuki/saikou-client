import { push } from 'connected-react-router'

import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  SET_USER,
  RESET_USER,
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

const authenticate = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_START })
  await delay(500)

  try {
    const token = await requests.getToken(email, password)
    const userData = await requests.getUserData(token.accessToken)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { accessToken: token.accessToken },
    })
    dispatch({
      type: SET_USER,
      payload: userData,
    })
    dispatch(push('/'))
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error })
  }
}

const deauthenticate = () => async (dispatch) => {
  dispatch({ type: LOGOUT_START })
  await delay(500)

  dispatch(push('/'))
  dispatch({ type: RESET_USER })
  dispatch({ type: LOGOUT_SUCCESS })
}

export { authenticate, deauthenticate, register }
