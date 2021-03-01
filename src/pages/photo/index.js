import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import useRequest from 'hooks/useRequest'
import api from 'services/api/photoApi'
import Page from 'components/Page'
import { Container } from 'components/Layout'
import Comments from 'components/Comments'

const PhotoPage = () => {
	const { id } = useParams()
	const { data: photo, loading, error } = useRequest(api.getPhoto, id)
	const [comments, setComments] = useState()

	useEffect(() => {
		setComments(photo.comments)
	}, photo.comments)

	const handleComment = async comment => {
		try {
			const response = await api.photoComment(id, { text: comment })
			setComments([...comments, response.data])
		} catch (err) {
			console.log(err)
		}
	}

	if (loading || error) return (
		<Page.Status
			loading={loading}
			error={error}
			errorMsg="Ops! Something went wrong!"
		/>
	)

	return (
		<Container size="compact">
			<Photo src={photo.url} />
			<Comments comments={comments} onComment={handleComment} />
		</Container>
	);
}

const Photo = styled.img`
	display: block;
	object-fit: cover;
	width: 100%;
	height: 100%;
	margin: 20px 0;
`

export default PhotoPage