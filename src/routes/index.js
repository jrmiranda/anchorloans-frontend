import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { PublicRoute, PrivateRoute, GuestRoute } from './helpers'

// Pages
import NotFoundPage from 'pages/_404'
import TestPage from 'pages/_test'

import HomePage from 'pages/home'
import PhotoPage from 'pages/photo'
import PendingPage from 'pages/pending'
import PrivatePage from 'pages/private'
import LoginPage from 'pages/login'

const Routes = () => {
  return (
    <Switch>
			<PrivateRoute path="/" component={HomePage} exact />
			<PublicRoute path="/photo/:id" component={PhotoPage} exact />
			<PublicRoute path="/pending" component={PendingPage} exact />
			<PrivateRoute path="/private" component={PrivatePage} exact />
			<GuestRoute path="/login" component={LoginPage} exact />
			<Route path="/test" component={TestPage} exact />
			<Route component={NotFoundPage} />
    </Switch>
  );
}

export default Routes