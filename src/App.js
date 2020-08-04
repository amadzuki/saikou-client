import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Home from './pages/home'
import AnimeCollection from './pages/anime'
import ItemDetail from './pages/itemDetail'
import About from './pages/about'
import MangaCollection from './pages/manga'
import Register from './pages/register'
import Login from './pages/login'
import Logout from './pages/logout'
import UserProfile from './pages/userProfile'
import Debug from './pages/debug'

import ScrollToTop from './components/ScrollToTop'
import RouteAddSlug from './components/RouteAddSlug'

import reducers from './reducers/index'

const reduxStore = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => {
  return (
    <Provider store={reduxStore}>
      <Router>
        <ScrollToTop></ScrollToTop>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path={['/anime/:id/', '/manga/:id/']} exact>
            <RouteAddSlug />
          </Route>
          <Route path={['/anime/:id/:slug', '/manga/:id/:slug']}>
            <ItemDetail />
          </Route>
          <Route path='/anime' exact>
            <AnimeCollection />
          </Route>
          <Route path='/manga' exact>
            <MangaCollection />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/logout'>
            <Logout />
          </Route>
          <Route path='/user'>
            <UserProfile />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/debug'>
            <Debug />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
