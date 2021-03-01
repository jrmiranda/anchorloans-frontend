import api from './api'

const authApi = {
	login: (email, password) => {
		return api.post(`/auth/jwt/login`, `username=${email}&password=${password}`,
		{
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		})
	},

	getProfile: () => {
		return api.get(`http://localhost:8000/users/me`)
	},
}

export default authApi