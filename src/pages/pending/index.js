import React from 'react'
import { useHistory } from 'react-router-dom'
import api from 'services/api/photoApi'
import useRequest from 'hooks/useRequest'
import { Container } from 'components/Layout'
import Page from 'components/Page'
import Album from 'components/Album'
import SendPhoto from 'components/SendPhoto'

// const photos = [
// 	{ url: 'https://www.themandarin.com.au/wp-content/uploads/2020/07/space-astronaut.jpg' },
// 	{ url: 'https://www.themandarin.com.au/wp-content/uploads/2020/07/space-astronaut.jpg' },
// 	{ url: 'https://www.themandarin.com.au/wp-content/uploads/2020/07/space-astronaut.jpg' },
// 	{ url: 'https://www.themandarin.com.au/wp-content/uploads/2020/07/space-astronaut.jpg' },
// 	{ url: 'https://www.themandarin.com.au/wp-content/uploads/2020/07/space-astronaut.jpg' },
// 	{ url: 'https://www.themandarin.com.au/wp-content/uploads/2020/07/space-astronaut.jpg' },
// ]

const PendingPage = () => {
	const history = useHistory()
	const { data: photos, loading, error } = useRequest(api.getPendingPhotos)

	const handleAprove = async photo => {
		try {
			const response = await api.acceptPhoto(photo._id)
			history.push(`/photo/${photo._id}`)
			console.log(response)
		} catch (err) {
			console.log(err)
		}
	}

	const handleDecline = photo => {
		alert(photo.url)
	}

	if (loading || error) return (
		<Page.Status
			loading={loading}
			error={error}
			errorMsg="Não foi possível carregar o processo. Tente novamente."
		/>
	)

	return (
		<Container>
			<SendPhoto/>
			<Album mode="admin" photos={photos} onAprove={handleAprove} onDecline={handleDecline} />
		</Container>
	);
}

export default PendingPage