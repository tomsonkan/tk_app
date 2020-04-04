import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import Home from './containers/Home'
import Login from './components/Login'
import cookie from 'cookie'

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
    <Route 
    {...rest}
    render={(props) => checkAuth()
    ? <Component {...props} />
    : <Redirect to="/login" />}
    />
  )
}

const Router = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
    </Switch>
  )
}

export default Router;