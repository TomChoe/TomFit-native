\c TomFit

INSERT INTO users (username, password, age, weight, height) VALUES
	(
		'tomtom',
		'tom',
		37,
		200,
		'5ft 8'
	),
	(
		'aly',
		'aly',
		24,
		180,
		'5ft 9'
	);

INSERT INTO workoutlogs (user_id, exercise, duration, difficulty) VALUES
	(
		1,
		'deadlifts',
		30,
		5
	),
	(
		2,
		'squats',
		25,
		8
	);