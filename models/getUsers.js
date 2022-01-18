//import query function from ../db/index.js
import query from '../db/index.js'
//create function to get all users

export async function getAllUsers() {
	const data = await query(`SELECT * FROM users;`)
	return data.rows
}
function createUser() {}
//create function to get all scores
// export async function getAllScores() {
// 	const data = await query(`SELECT * FROM scores;`)
// 	return data.rows
// }
//create function to get users by id
export async function getUserByID(id) {
	const data = await query(`SELECT * FROM users WHERE userID = $1;`, [id])
	return data.rows
}
//create function to get games played by user
export async function getGamesPlayedByUser(id) {
	const data = await query(
		`SELECT * FROM users JOIN scores ON users.userID = scores.userID WHERE users.userID = $1;`,
		[id]
	)
	return data.rows
}
