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

	// getLog(req, res) {
	// 	logsDb.findOne(req.params.id)
	// 	.then((log) => {
	// 		res.json({
	// 			message: 'ok',
	// 			data: log
	// 		})
	// 	})
	// 	.catch(err => {
	// 		console.log('error getting one', err)
	// 	})
	// },

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
	},

	updateLog(req, res) {
		logsDB.update(req.body)
		.then((log) => {
			res.json({
				message: 'ok',
				data: log
			})
		})
		.catch(err => {
			console.log('error in updating log', err)
		})
	},

	deleteLog(req, res) {
		logsDB.delete(req.params.id)
		.then(log => {
			res.json({
				message: 'deleted',
			})
		})
		.catch(err => console.log('error deleting log', err))
	}
}