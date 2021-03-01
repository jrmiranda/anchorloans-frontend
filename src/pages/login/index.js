import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import api from 'services/api/authApi'
import useAuth from 'hooks/useAuth'
import { setLocalToken, setLocalUser } from 'services/auth'
import { Container } from 'components/Layout'
import Page from 'components/Page'
import Button from 'components/Button'

const LoginPage = () => {
	const history = useHistory()
	const { setUser } = useAuth()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const handleSubmit = async e => {
		e.preventDefault()
		
		try {
			setLoading(true)
			const response = await api.login(email, password)
			setLocalToken(response.data.access_token)

			const profile_response = await api.getProfile()
			setUser(profile_response.data)
			setLocalUser(profile_response.data)

			console.log(profile_response.data)
			history.push('/')
			//console.log(response.data)
		} catch (err) {
			console.log(err)
			setError('Usuário e/ou senha inválidos.')
		} finally {
			setLoading(false)
		}
	}

	if (loading) return (
		<Page.Status
			loading={loading}
			error={error}
			errorMsg="Não foi possível submeter o formulário. Recarregue e tente novamente."
		/>
	)

	return (
		<LoginContainer>
			<Title>Login</Title>
			{error && <Error>{error}</Error>}
			<Form>
				<Input type="text" placeholder="Nome de usuário" onChange={e => setEmail(e.target.value)} />
				<Input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
				<Button color="primary" onClick={handleSubmit}>Entrar</Button>
			</Form>
		</LoginContainer>
	);
}

const LoginContainer = styled(Container)`
	max-width: 400px;
	margin-top: 50px;
	padding: 20px;
	background: white;
	box-sizing: border-box;
	border: 1px solid #ddd;
`;

const Title = styled.div`
	font-size: 24px;
	text-align: center;
	margin-bottom: 20px;
	border-bottom: 0px solid #ddd;
	color: #333;
`;

const Error = styled.div`
	font-size: 14px;
	color: red;
	margin: 5px;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	background: white;
	border: 1px solid #ccc;
	margin: 5px 0 10px 0;
	padding: 10px;
	outline: none;

	&:focus {
		border-color: #888;
	}
`;

export default LoginPage