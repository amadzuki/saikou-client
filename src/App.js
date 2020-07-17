import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import AnimeCollection from './pages/anime'
import ItemDetail from './pages/itemDetail'
import About from './pages/about'
import MangaCollection from './pages/manga'
import Register from './pages/register'
import Login from './pages/login'

import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <Router>
      <ScrollToTop></ScrollToTop>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/anime" exact>
          <AnimeCollection />
        </Route>
        <Route path={['/anime/:id', '/manga/:id']}>
          <ItemDetail />
        </Route>
        <Route path="/manga" exact>
          <MangaCollection />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
