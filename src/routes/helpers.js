import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from 'lib/auth'

export const UserRoute = ({ component: Component, template: Template, restrict, fallback, ...rest }) => {
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
			<div>{children}</div>
		)
	}

	return (<Route {...rest} render={props => 
		shouldRender ? (
			<Template>
				<Component {...props} />
			</Template>
		) : (
			<Redirect to={fallback || '?'} />
		)
	}
/>)
}

export const PublicRoute = ({ component: Component, rest }) => (
	<UserRoute component={Component} restrict="public" {...rest} />
)

export const PrivateRoute = ({ component: Component, rest }) => (
	<UserRoute component={Component} restrict="private" fallback="/login" {...rest} />
)

export const GuestRoute = ({ component: Component, rest }) => (
	<UserRoute component={Component} restrict="guest" {...rest} />
)