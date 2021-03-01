import React, { useEffect } from 'react'
import api from 'services/api/authApi'

const TestPage = () => {
	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const response = await api.getProfile()
				console.log(response.data)
			} catch (err) {
				console.log(err.response.data)
			}
		}
		fetchProfile()
	}, [])

	return (
		<div>
			404
		</div>
	);
}

export default TestPage