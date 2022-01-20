//import query function from ../db/index.js
import query from '../db/index.js'
//create function to get all stats

export async function getAllStats() {
	try {
		const data = await query(
			`SELECT * FROM progress JOIN users ON users.uid = progress.link_id;`
		)
		return data.rows
	} catch (error) {
		console.log(error.message)
	}
}
export async function getStatsByUserPassword(password) {
	try {
		const data = await query(
			`SELECT * FROM progress JOIN users ON users.uid = progress.link_id WHERE password = $1;`,
			[password]
		)
		return data.rows
	} catch (error) {
		console.log(error.message)
	}
}
export async function getStatsByWeek(week) {
	try {
		const data = await query(`SELECT week FROM progress;`)
		return data.rows
	} catch (error) {
		console.log(error.message)
	}
}
export async function getStatsByDay() {
	try {
		const data = await query(`SELECT day FROM progress;`)
		return data.rows
	} catch (error) {
		console.log(error.message)
	}
}
//create function to create stats
export async function createStats(week, day, score, link_id) {
	try {
		const data = await query(
			'INSERT INTO progress (week, day, score, link_id) VALUES($1, $2, $3, $4) RETURNING *;',
			[week, day, score, link_id]
		)
		console.log('data.rows: ', data.rows)
		return data.rows
	} catch (error) {
		console.log(error)
	}
}
