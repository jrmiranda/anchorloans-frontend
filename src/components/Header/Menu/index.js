import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
	return (
		<ul>
			<li><NavLink to="/">Home</NavLink></li>
			<li><NavLink to="/about">About</NavLink></li>
			<li><NavLink to="/private">Private</NavLink></li>
			<li><NavLink to="/login">Login</NavLink></li>
		</ul>
	);
}

export default Menu