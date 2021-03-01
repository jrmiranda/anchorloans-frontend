import React from 'react'
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

const HomePage = () => {
	const { data: photos, loading, error } = useRequest(api.getPhotos)

	const handleAprove = photo => {
		alert(photo.url)
	}

	const handleDecline = photo => {
		alert(photo.url)
	}

	if (loading || error) return (
		<Page.Status
			loading={loading}
			error={error}
			errorMsg="An error occurred. Try again."
		/>
	)

	return (
		<Container>
			<SendPhoto/>
			<Album photos={photos} onAprove={handleAprove} onDecline={handleDecline} />
		</Container>
	);
}

export default HomePage