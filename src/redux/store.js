import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import throttle from 'lodash.throttle'
import thunk from 'redux-thunk'

import createRootReducer from './reducers/index'

import { saveState, loadState } from '../utils/localStorage'

const previousData = loadState()

export const history = createBrowserHistory()

const middlewares = [thunk]

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

const reduxStore = createStore(
  createRootReducer(history),
  previousData,
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), ...middlewares)
  )
)

reduxStore.subscribe(
  throttle(() => {
    saveState(reduxStore.getState())
  }, 2000)
)

export default reduxStore
