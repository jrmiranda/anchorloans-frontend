import axios from 'axios'
import { getLocalToken } from '../auth'

const api = axios.create({
	baseURL: 'http://localhost:8000'
})

api.interceptors.request.use(async config => {
	const token = getLocalToken()

	if (token)
		config.headers.Authorization = `Bearer ${token}`

	return config
})

export default api