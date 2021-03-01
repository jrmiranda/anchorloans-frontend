import { useState, useEffect } from 'react'

const useRequest = (method, options) => {
	const [opt] = useState(options) // setopt
	const [data, setData] = useState({})
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true)
				const response = await method(opt)
				setData(response.data)
			} catch (err) {
				setError(err)
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [method, opt])

	return { data, loading, error }
}

export default useRequest