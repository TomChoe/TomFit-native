const loginRouter = require('express').Router();
const users = require('../controllers/usersController');

loginRouter.post('/', users.loginUser)

module.exports = loginRouter