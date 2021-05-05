import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Favorite from './pages/Favorite'

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/favorite">
          <Favorite />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  )
}

export default App
