import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { PublicRoute, PrivateRoute, GuestRoute } from './helpers'

// Pages
import HomePage from 'pages/HomePage'
import AboutPage from 'pages/AboutPage'
import PrivatePage from 'pages/PrivatePage'
import LoginPage from 'pages/LoginPage'
import NotFoundPage from 'pages/NotFoundPage'

const Routes = () => {
  return (
    <Switch>
			<Route path="/" component={HomePage} exact />
			<PublicRoute path="/about" component={AboutPage} exact />
			<PrivateRoute path="/private" component={PrivatePage} exact />
			<GuestRoute path="/login" component={LoginPage} exact />
			<Route component={NotFoundPage} />
    </Switch>
  );
}

export default Routes