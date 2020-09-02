import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import user from './user'
import allAnime from './allAnime'
import allManga from './allManga'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    user,
    allAnime,
    allManga,
  })

export default createRootReducer
