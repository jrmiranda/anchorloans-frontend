import api from './api'

const photoApi = {
	getPhotos: () => {
		return api.get(`/photos`)
	},

	getPendingPhotos: () => {
		return api.get(`/photos/pending`)
	},

	getPhoto: id => {
		return api.get(`/photos/${id}`)
	},

	uploadPhoto: data => {
		return api.post(`/photos`, data, {  
			headers: { 'Content-Type': 'multipart/form-data' }
		})
	},

	acceptPhoto: id => {
		return api.get(`/photos/${id}/accept`)
	},

	photoComment: (id, data) => {
		return api.post(`/photo/${id}/comment`, data)
	}
}

export default photoApi