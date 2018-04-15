const workoutlogRouter = require('express')();
const workoutlogs = require('../controllers/workoutlogsController')

workoutlogRouter.route('/')
	.post(workoutlogs.createLog)

workoutlogRouter.route('/profile/:id')
	.get(workoutlogs.getLogs)

workoutlogRouter.route('/:id')
	.get(workoutlogs.getLog)

module.exports = workoutlogRouter