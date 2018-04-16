const db = require('../config/connection');

module.exports = {
	// findAll() {
	// 	return db.any('SELECT * FROM workoutlogs ORDER BY id ASC')
	// },
	findOne(id) {
		return db.one(`SELECT * FROM workoutlogs WHERE id=$1`, id)
	},

	findAllByUser(user) {
		return db.any(`SELECT * FROM workoutlogs WHERE user_id=$1`, user)
	},

	saveLog(log) {
		return db.one(`INSERT INTO workoutlogs (user_id, exercise, duration, difficulty)
				       VALUES ($/user_id/, $/exercise/, $/duration/, $/difficulty/)
				       RETURNING *`, log)
	},

	update(log) {
		return db.one(`UPDATE workoutlogs SET
					   exercise = $/exercise/,
					   duration = $/duration/,
					   difficulty = $/difficulty/
					   WHERE id = $/id/
					   RETURNING *`, log)
	},

	delete(id) {
		
		return db.none(`DELETE FROM workoutlogs WHERE id=$1`, id)
	}
}