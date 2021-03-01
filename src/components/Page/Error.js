import React from 'react'
import styled from 'styled-components'

const Error = ({ headline, children }) => (
	<Wrapper>
		<Headline>{headline || 'Ops...'}</Headline>
		<Text>{children}</Text>
	</Wrapper>
)

const Wrapper = styled.div`
	margin: 20px 0;
	padding: 10px;
	color: #888;
	text-shadow: 1px 1px 1px #fff;
`

const Headline = styled.span`
	display: block;
	font-size: 28px;
	font-weight: bold;
`

const Text = styled.span`
	display: block;
	font-size: 22px;
	margin: .2em 0;
`

export default Error