import query from '../index.js'

// List of users for test purposes
const user = {
	name: 'Joe',
	password: 'pass1',
}
const progress = {
	week: 1,
	day: 2,
	score: 9,
}
async function insertData() {
	const {name, password} = user
	const {week, day, score} = progress

	const resUsers = await query(
		`INSERT INTO users (name, password) VALUES ($1, $2);`,
		[name, password]
	)
	const resProgress = await query(
		`INSERT INTO progress (week, day,score) VALUES ($1, $2, $3) RETURNING *;`,
		[week, day, score]
	)
	console.log('resUsers: ', resUsers)
	console.log('resProgress: ', resProgress)
}

insertData()
