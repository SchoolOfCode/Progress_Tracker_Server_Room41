import query from '../index.js'

// List of users for test purposes
const user = {
	name: 'Joe',
	score: 9,
}
async function insertData() {
	const {name, score} = user

	const resUsers = await query(
		`INSERT INTO users (name, score) VALUES ($1, $2);`,
		[name, score]
	)
	console.log('resUsers: ', resUsers)
}

insertData()
