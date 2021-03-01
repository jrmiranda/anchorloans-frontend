import React from 'react'
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

	const handleComment = comment => {
		alert(comment)
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
			<Comments comments={photo.comments} onComment={handleComment} />
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