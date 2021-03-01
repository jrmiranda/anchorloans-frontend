import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Routes from 'routes'
import GlobalStyle from 'styles/global'
import theme from 'styles/theme'
import { Wrapper, Main } from 'components/Layout'
import Header from 'components/Header'
import Footer from 'components/Footer'

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle/>
				<BrowserRouter>
					<Wrapper>
						<Header/>
						<Main>
							<Routes/>
						</Main>
						<Footer/>
					</Wrapper>
				</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
