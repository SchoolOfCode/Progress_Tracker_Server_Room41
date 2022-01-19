import query from '../index.js'
const createUsersTable = `CREATE TABLE IF NOT EXISTS users(uid SERIAL PRIMARY KEY, name TEXT, password TEXT);`
const createProgressTable = `CREATE TABLE IF NOT EXISTS progress(pid SERIAL PRIMARY KEY, week INT, day INT, score INT);`
async function createTables() {
	const userResponse = await query(createUsersTable)
	console.log({userResponse})
	const tableResponse = await query(createProgressTable)
	console.log({tableResponse})
}
createTables()
