import React from 'react'
import styled from 'styled-components'

const Footer = () => {
	return (
		<Wrapper>
			<p>2021 - Wedbook</p>
			<p>A test case</p>
		</Wrapper>
	);
}

const Wrapper = styled.footer`
	padding: 1em;
	background: white;
	border-top: 1px solid #ddd;

	p {
		display: block;
		margin: .2em;
		padding: 0;
		color: #777;
		text-align: center;
		font-size: 14px;
	}
`

export default Footer