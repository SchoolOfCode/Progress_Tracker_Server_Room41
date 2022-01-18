//import query function from ../db/index.js
import query from '../db/index.js'
//create function to get all users

export async function getAllUsers() {
	try {
		const data = await query(`SELECT * FROM users;`)
		return data.rows
	} catch (error) {
		console.log(error.message)
	}
}
//create function to create user
export async function createUser(body) {
	try {
		const data = await query('INSERT INTO users (name) VALUES($1);', [body])
		console.log('data.rows: ', data.rows)
		return data.rows
	} catch (error) {
		console.log(error)
	}
}

//create function to get users by id
export async function getUserByID(id) {
	try {
		const data = await query(`SELECT * FROM users WHERE userID = $1;`, [id])
		return data.rows
	} catch (error) {
		console.log(error.message)
	}
}
