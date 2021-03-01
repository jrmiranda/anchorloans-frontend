import { useState } from 'react'
import { getLocalUser, logoutLocal } from 'services/auth'

const useAuth = () => {
	const [user, setUser] = useState(getLocalUser())

	const logout = () => {
		setUser(null)
		logoutLocal()
	}

	return { user, setUser, logout }
}

export default useAuth