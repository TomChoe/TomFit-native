const signupRouter = require('express').Router();
const signup = require('../controllers/usersController');

signupRouter.route('/')
	.post(signup.newUser)

module.exports = signupRouter