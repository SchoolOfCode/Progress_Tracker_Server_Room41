//import query function from ../db/index.js
import query from '../db/index.js'
//create function to get all stats

export async function getAllStats() {
	try {
		const data = await query(`SELECT * FROM progress;`)
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
export async function createStats(week, day, score) {
	try {
		const data = await query(
			'INSERT INTO progress (week, day, score) VALUES($1, $2, $3);',
			[week, day, score]
		)
		console.log('data.rows: ', data.rows)
		return data.rows
	} catch (error) {
		console.log(error)
	}
}
