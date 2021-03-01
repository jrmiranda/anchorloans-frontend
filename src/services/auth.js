export const TOKEN_KEY = '@app-Token'
export const USER_KEY = '@app-User'

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null

export const setLocalToken = data => localStorage.setItem(TOKEN_KEY, data)
export const setLocalUser = data => localStorage.setItem(USER_KEY, JSON.stringify(data))

export const getLocalToken = () => localStorage.getItem(TOKEN_KEY)
export const getLocalUser = () => JSON.parse(localStorage.getItem(USER_KEY))

export const logoutLocal = () => {
	localStorage.removeItem(TOKEN_KEY)
	localStorage.removeItem(USER_KEY)
}
