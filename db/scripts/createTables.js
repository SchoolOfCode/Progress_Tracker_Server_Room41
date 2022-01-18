import query from '../index.js'
const createUsersTable = `CREATE TABLE IF NOT EXISTS users(user_id SERIAL PRIMARY KEY, first_name TEXT, last_name TEXT);`
async function createTable() {
	const response = await query(createUsersTable)
	console.log({response})
}
createTable()
