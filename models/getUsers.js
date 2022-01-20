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
export async function createUser(name, pass) {
	try {
		const data = await query(
			'INSERT INTO users (name, password) VALUES($1, $2) RETURNING *;',
			[name, pass]
		)
		console.log('data.rows: ', data.rows)
		return data.rows
	} catch (error) {
		console.log(error)
	}
}

//create function to get users by id
export async function getUserByID(id) {
	try {
		const data = await query(`SELECT * FROM users WHERE user_id = $1;`, [id])
		return data.rows
	} catch (error) {
		console.log(error.message)
	}
}
//create function to get users by name
export async function getSignUpUser(name, password) {
	try {
		const data = await query(
			`SELECT * FROM users WHERE name = $1 AND password = $2;`,
			[name, password]
		)
		return data.rows
	} catch (error) {
		console.log(error.message)
	}
}
