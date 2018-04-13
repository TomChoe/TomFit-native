\c TomFit

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS workoutlogs;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(255) UNIQUE,
	password VARCHAR(255),
	age INTEGER,
	weight INTEGER,
	height VARCHAR(10),
	date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE workoutlogs (
	id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE NOT NULL,
	exercise VARCHAR(255),
	duration INTEGER,
	difficulty INTEGER,
	date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON users (username);
CREATE INDEX ON workoutlogs (user_id);