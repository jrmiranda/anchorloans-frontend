import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import api from 'services/api/photoApi'
import Button from 'components/Button'
import Loading from 'components/Loading'
import Alert from 'components/Alert'

const SendPhoto = () => {
	const [file, setFile] = useState()
	const [status, setStatus] = useState(null)

	const hiddenFileInput = useRef()

	const handleButtonClick = e => {
		e.preventDefault()
		hiddenFileInput.current.click()
	}

	const handleChange = e => {
		e.preventDefault()
		setFile(e.target.files[0])
	}

	const handleSubmit = async e => {
		e.preventDefault()
		let data = new FormData()
		data.append('file', file)

		try {
			setStatus('loading')
			const response = await api.uploadPhoto(data)
			setStatus('success')
			setFile(null)
			console.log(response)
		} catch (err) {
			setStatus('error')
		}
	}

	return (
		<Wrapper>
			{status === 'success' && (<Alert type="success">Your photo was uploaded! Now wait for the admins to accept it.</Alert>)}
			{file ? (
				<Box>
					{status === 'loading' && (<Loading/>)}
					{status === 'error' && (<Alert type="error">Ops! Something went wrong.</Alert>)}
					<FileName>{file.name}</FileName>
					<Button.Group justify="center">
						<Button size="small" color="primary" onClick={handleButtonClick}>Choose Another</Button>
						<Button size="small" color="green" onClick={handleSubmit}>Send Photo</Button>
					</Button.Group>
				</Box>
			) : (
				<div>
					<Button size="small" color="primary" onClick={handleButtonClick}>Upload Photo</Button>
				</div>
			)}
			<input
				type="file"
				ref={hiddenFileInput}
				onChange={handleChange}
				style={{display: 'none'}}
			/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin: 20px 10px;
`

const Box = styled.div`
	width: 100%;
	max-width: 700px;
	margin: 20px auto;
	padding: .5em;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 3px dashed #aaa;

	p {
		display: block;
		margin: 1em;
		padding: 0;
		color: #888;
	}

	div {
		display: flex;
		flex-direction: row;
	}
`

const FileName = styled.span`
	display: block;
	margin-top: .2em;
`

export default SendPhoto