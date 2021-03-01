import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	html, body {
		margin: 0;
		padding: 0;
		font-family: 'Roboto', sans-serif;
		background: whitesmoke;
	}

	div {
		box-sizing: border-box;
	}
`;

export default GlobalStyle