const logsDB = require('../models/workoutlogsDB');

module.exports = {
	createLog(req, res) {
		logsDB.saveLog(req.body)
		.then((log) => {
			res.json({
				message: 'ok',
				data: log
			})
		})
		.catch((err) => {
			console.log('error in creating log', err)
		})
	},

	getLog(req, res) {
		logsDb.findOne(req.params.id)
		.then((log) => {
			res.json({
				message: 'ok',
				data: log
			})
		})
		.catch(err => {
			console.log('error getting one', err)
		})
	},

	getLogs(req, res) {
		logsDB.findAllByUser(req.params.id)
		.then((logs) => {
			res.json({
				message: 'ok',
				data: logs
			})
		})
		.catch((err) => {
			console.log('error retrieving logs', err)
		})
	}

}