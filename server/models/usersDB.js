const db = require('../config/connection');

module.exports = {
	createUser(user) {
		return db.one(`INSERT INTO users (username, password, age, weight, height) 
					   VALUES ($/username/, $/password/, $/age/, $/weight/, $/height/)
					   RETURNING *`, user)
	},

	editUser(user) {
		return db.one(`UPDATE users SET
					   username = $/username/,
					   age = $/age/,
					   weight = $/weight/
					   WHERE id = $/id/
					   RETURNING *`, user)
	},

	authenticateByUsername(username) {
		return db.one(`SELECT * FROM users WHERE username = $/username/ AND password = $/password/`, username)
	},

	deleteUser(id) {
		return db.none(`DELETE FROM users WHERE id=$1`, id)
	}
}

