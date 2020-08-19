import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import throttle from 'lodash.throttle'
import thunk from 'redux-thunk'

import createRootReducers from './reducers/index'

import { saveState, loadState } from '../utils/localStorage'

const previousData = loadState()

const history = createBrowserHistory()

const reduxStore = createStore(
  createRootReducers(history),
  previousData,
  composeWithDevTools(applyMiddleware(routerMiddleware(history, thunk)))
)

reduxStore.subscribe(
  throttle(() => {
    saveState(reduxStore.getState())
  }, 2000)
)

export default reduxStore
