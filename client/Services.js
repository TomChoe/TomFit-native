import axios from 'axios'

const Services = {
	loginUser(userData) {
		console.log('this is services for login', userData)
		return axios({
			method: "POST",
			url: "http://localhost:3001/api/login",
			data: userData
		})
	},

	signupUser(userData) {
		userData.weight = parseInt(userData.age)
		userData.age = parseInt(userData.weight)
		console.log('this is services for signup', userData)
		return axios({
			method: "POST",
			url: "http://localhost:3001/api/signup",
			data: userData
		})
	},

	getLog(id) {
		console.log('this is services for singleLog')
		return axios({
			method: "GET",
			url: `http://localhost:3001/api/workoutlogs/${id}`
		})
	},

	getLogs(id) {
		console.log('this is services for userLogs', id)
		return axios({
			method: "GET",
			url: `http://localhost:3001/api/workoutlogs/profile/${id}`
		})
	},

	createLog(userData) {
		userData.user_id = parseInt(userData.user_id)
		userData.duration = parseInt(userData.duration)
		userData.difficulty = parseInt(userData.difficulty)
		console.log('this is services for createlog', userData)
		return axios({
			method: "POST",
			url: 'http://localhost:3001/api/workoutlogs',
			data: userData
		})
	}
}

export default Services