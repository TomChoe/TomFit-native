import axios from 'axios'

const Services = {}

Services.loginUser = (userData) => {
	console.log('this is services for login', userData)
	return axios({
		method: "POST",
		url: "http://localhost:3001/api/login",
		data: {	
			userData
		}
	})
}

export default Services
