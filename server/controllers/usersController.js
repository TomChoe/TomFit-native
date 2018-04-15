const userDB = require('../models/usersDB');

module.exports = {
	newUser(req, res) {
		userDB.createUser(req.body)
		.then((user) => {
			res.json({
				message: "ok",
				data: user
			})
		})
		.catch(err => {
			console.log('error in creating user',err)
		})
	},

	loginUser(req, res) {
		console.log('hittin user login', req.body)
		userDB.authenticateByUsername(req.body)
		.then(user => {
			res.json({
				message: 'ok',
				data: user
			})
		})	
		.catch(err => {
			console.log('error loggin in', err)
		})
	},

	deleteUser(req, res) {
		userDB.deleteUser(req.params.id)
		.then((results) => {
			console.log('deleted user', results)
		})
		.catch(err => {
			console.log('error deleting user', err)
		});
	}
}