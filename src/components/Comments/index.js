import React, { useState } from 'react'
import styled from 'styled-components'

const Comments = ({ comments, onComment }) => {
	const [comment, setComment] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		onComment(comment)
	}

	return (
		<Wrapper>
			<Title>Comments</Title>

			<form onSubmit={handleSubmit}>
				<Input onChange={e => setComment(e.target.value)} placeholder="Add a comment..." />
			</form>

			{comments && comments.map(comment => (
					<Comment>
						<Author>{comment.author}:</Author>
						<Text>{comment.text}</Text>
					</Comment>
				)
			)}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin: 10px 0;
	padding: 1em;
  background: white;
  border: 1px solid #00285d1f;
  border-radius: 5px;
  box-sizing: border-box;
`

const Title = styled.span`
	display: block;
	margin-bottom: 10px;
	padding-bottom: 5px;
	font-weight: bold;
	border-bottom: 0px solid #ddd;
	color: #555;
`

const Comment = styled.div`
	padding: 10px 0;
	border-top: 1px solid #ddd;
`

const Author = styled.span`
	margin-bottom: 10px;
	margin-right: 10px;
	padding-bottom: 5px;
	font-weight: bold;
	color: #555;
	font-size: 14px;
`

const Text = styled.span`
	margin-bottom: 10px;
	padding-bottom: 5px;
	font-size: 14px;
`

const Input = styled.input`
	width: 100%;
	margin: 0;
	padding: 8px 10px;
	font-size: 16px;
	box-sizing: border-box;
	border: 1px solid #ddd;
	outline: none;
`

export default Comments