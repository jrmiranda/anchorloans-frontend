import styled from 'styled-components'

const colors = {
	error: {
		text: '#c62828',
		bg: '#ffebee'
	},
	success: {
		text: '#558b2f',
		bg: '#f1f8e9'
	},
	info: {
		text: '#052f8b',
		bg: '#dae9f8'
	},
}

const Alert = styled.div`
	margin-bottom: 20px;
	padding: 10px;
	background: ${props => colors[props.type].bg};
	border-left: 3px solid ${props => colors[props.type].text};
	color: ${props => colors[props.type].text};
`

export default Alert