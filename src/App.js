import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import {
  Home,
  AnimeCollection,
  ItemDetail,
  About,
  MangaCollection,
  Register,
  Login,
  Logout,
  Debug,
} from './pages/index'

import ScrollToTop from './containers/ScrollToTop'
import RouteAddSlug from './containers/RouteAddSlug'
import PrivateRoute from './containers/PrivateRoute'

import reduxStore from './redux/store'

const App = () => {
  return (
    <Provider store={reduxStore}>
      <Router>
        <ScrollToTop />
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
          <Route path='/profile/:slug'>
            <PrivateRoute />
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
