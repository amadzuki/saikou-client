import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import { RouteAddSlug, PrivateRoute, ScrollToTop } from './'

import { history } from '../redux/store'

import {
  Home,
  AnimeCollection,
  MangaCollection,
  PageItemDetail,
  About,
  Register,
  Login,
  Logout,
  Debug,
} from '../pages'

const RouterContainer = () => {
  return (
    <ConnectedRouter history={history}>
      <ScrollToTop />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/anime/:id/' exact>
          <RouteAddSlug type='anime' />
        </Route>
        <Route path='/manga/:id/' exact>
          <RouteAddSlug type='manga' />
        </Route>
        <Route path='/anime/:id/:slug'>
          <PageItemDetail type='anime' />
        </Route>
        <Route path='/manga/:id/:slug'>
          <PageItemDetail type='manga' />
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
    </ConnectedRouter>
  )
}

export default RouterContainer
