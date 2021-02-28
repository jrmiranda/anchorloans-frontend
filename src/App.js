import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Routes from 'routes'
import GlobalStyle from 'styles/global'
import theme from 'styles/theme'
import { Container } from 'react-spine'
import Header from 'components/Header'
import Footer from 'components/Footer'

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle/>
				<BrowserRouter>
					<Container>
						<Header/>
						<Routes/>
						<Footer/>
					</Container>
				</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
