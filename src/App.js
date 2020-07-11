import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import Anime from './pages/anime'
import About from './pages/about'
import Manga from './pages/manga'
import Register from './pages/register'
import Login from './pages/login'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/anime">
            <Anime />
          </Route>
          <Route path="/manga">
            <Manga />
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
      </div>
    </Router>
  )
}

export default App
