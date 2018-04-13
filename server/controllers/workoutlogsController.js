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

	getLogs(req, res) {
		logsDB.findAll()
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