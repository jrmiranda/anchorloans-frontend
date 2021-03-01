import styled from 'styled-components'
import theme from 'styles/theme'

const buttonColors = {
	default: {
		bg: '#fff',
		border: '#aaa',
		text: '#333'
	},
	primary: {
		bg: theme.colors.primary,
		border: theme.colors.primary,
		text: '#fff'
	},
	red: {
		bg: theme.colors.red,
		border: theme.colors.red,
		text: '#fff'
	},
	yellow: {
		bg: theme.colors.yellow,
		border: theme.colors.yellow,
		text: '#000'
	},
	green: {
		bg: theme.colors.green,
		border: theme.colors.green,
		text: '#fff'
	},
	blue: {
		bg: theme.colors.blue,
		border: theme.colors.blue,
		text: '#fff'
	}
}

const buttonSizes = {
	default: {
		font: '15px',
		padding: '.7em .9em'
	},
	small: {
		font: '14px',
		padding: '.5em .9em'
	},
	tiny: {
		font: '13px',
		padding: '.3em .5em'
	},
}

const Button = styled.button`
	display: inline-block;
	border-width: 1px;
	border-style: solid;
	opacity: 1;
	border-radius: 4px;
	font-weight: 500;
	outline: none;
	text-decoration: none;
	cursor: pointer;

	// Colors
	background: ${props => props.color ? buttonColors[props.color].bg : buttonColors.default.bg};
	color: ${props => props.color ? buttonColors[props.color].text : buttonColors.default.text};
	border-color: ${props => props.color ? buttonColors[props.color].border : buttonColors.default.border};

	// Sizes
	padding: ${props => props.size ? buttonSizes[props.size].padding : buttonSizes.default.padding};
	font-size: ${props => props.size ? buttonSizes[props.size].font : buttonSizes.default.font};

	&:hover {
		filter: brightness(110%);
	}

	&:active {
		filter: brightness(90%);
	}

	&:disabled {
		cursor: default;
		opacity: 0.8;

		&:hover, &:active {
			filter: brightness(100%);
		}
	}

	&:visited {
		text-decoration: none;
	}

	svg {
		margin-right: .3em;
	}
`;

const Group = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: ${props => props.justify ?? 'flex-start'};
	align-items: center;
	margin: 5px 0;
	padding: 5px;

	${Button} {
		display: block;
		margin: 0 .2em;
	}
`

Button.Group = Group

export default Button