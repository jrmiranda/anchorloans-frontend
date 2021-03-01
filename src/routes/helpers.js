import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from 'services/auth'

// Templates
//import MainTemplate from 'templates/main'
//import DashboardTemplate from 'templates/dashboard'

export const CustomRoute = ({ component: Component, template: Template, restrict, fallback, ...rest }) => {
	let shouldRender = false

	switch (restrict) {
		case 'public':
			shouldRender = true
			break
		case 'private':
			shouldRender = isAuthenticated()
			break
		case 'guest':
			shouldRender = !isAuthenticated()
			break
		default:
			shouldRender = true
	}

	if (!Template) {
		Template = ({ children }) => (
			<>{children}</>
		)
	}

	return (
		<Route {...rest} render={props => 
			shouldRender ? (
				<Template>
					<Component {...props} />
				</Template>
			) : (
				<Redirect to={{
					pathname: fallback || '/',
					state: { from: props.location }
				}} />
			)
		}
		/>
	)
}

export const PublicRoute = ({ component: Component, ...rest }) => (
	<CustomRoute component={Component} restrict="public" {...rest} />
)

export const PrivateRoute = ({ component: Component, ...rest }) => (
	<CustomRoute component={Component} restrict="private" fallback="/login" {...rest} />
)

export const GuestRoute = ({ component: Component, ...rest }) => (
	<CustomRoute component={Component} restrict="guest" {...rest} />
)