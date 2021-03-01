import React from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import useAuth from 'hooks/useAuth'
import { Container } from 'components/Layout'

const Header = () => {
	const history = useHistory()
	const { user, logout } = useAuth()

	const handleLogout = e => {
		e.preventDefault()
		logout()
		history.push('/')
	}

	return (
		<Wrapper>
			<HeaderContainer>
				<Logo>
					<NavLink to="/">Wedbook</NavLink>
				</Logo>
				{user && (
					<div>
						{user?.email} <Link onClick={handleLogout}>(sair)</Link>
					</div>
				)}
			</HeaderContainer>
		</Wrapper>
	);
}

const Wrapper = styled.header`
	background: white;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 50px;
	border-bottom: 1px solid #ddd;
`

const HeaderContainer = styled(Container)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

const Logo = styled.h2`
	font-size: 22px;
	display: block;
	margin: 0;
	padding: 0;
	color: #333;

	a {
		color: #333;
		text-decoration: none;
	}
`

const Link = styled.span`
	color: #555;
	text-decoration: none;
	font-size: 14px;
	cursor: pointer;

	&:hover {
		color: #000;
	}
`

export default Header