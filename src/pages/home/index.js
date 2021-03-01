import React from 'react'
import { NavLink } from 'react-router-dom'
import api from 'services/api/photoApi'
import useRequest from 'hooks/useRequest'
import { Container } from 'components/Layout'
import Page from 'components/Page'
import Album from 'components/Album'
import SendPhoto from 'components/SendPhoto'
import Alert from 'components/Alert'

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
	const { data: pendingPhotos, loading:loadingPending, error: errorPending } = useRequest(api.getPendingPhotos)

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
			{pendingPhotos.length > 0 && (
				<Alert type="info">There are pending photos! <NavLink to="/pending">Click here</NavLink> to access them.</Alert>
			)}
			<SendPhoto/>
			<Album photos={photos} onAprove={handleAprove} onDecline={handleDecline} />
		</Container>
	);
}

export default HomePage