import { createStore } from 'redux'
import throttle from 'lodash.throttle'

import reducers from './reducers/index'

import { saveState, loadState } from '../utils/localStorage'

const previousData = loadState()

const reduxStore = createStore(
  reducers,
  previousData,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

reduxStore.subscribe(
  throttle(() => {
    saveState(reduxStore.getState())
  }, 2000)
)

export default reduxStore
