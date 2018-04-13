const workoutlogRouter = require('express')();
const workoutlogs = require('../controllers/workoutlogsController')

workoutlogRouter.route('/')
	.get(workoutlogs.getLogs)

module.exports = workoutlogRouter