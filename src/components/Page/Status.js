import React from 'react'
import Loading from './Loading'
import Error from './Error'

const Status = ({ loading, error, errorMsg }) => {
	if (loading) {
		return <Loading/>
	}
	
	if (error) {
		return <Error>{errorMsg}</Error>
	}

	return <></>
}

export default Status