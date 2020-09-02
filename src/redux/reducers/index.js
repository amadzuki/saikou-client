import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import user from './user'
import anime from './anime'
import manga from './manga'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    user,
    anime,
    manga,
  })

export default createRootReducer
