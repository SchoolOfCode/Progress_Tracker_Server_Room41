import query from '../index.js'
const createUsersTable = `CREATE TABLE IF NOT EXISTS users(user_id SERIAL PRIMARY KEY, name TEXT, score INT);`
// const dropUsersTable = `DROP TABLE IF EXISTS users;`
async function createTable() {
	const response = await query(createUsersTable)
	console.log({response})
}
createTable()
// async function dropTable() {
// 	const response = await query(dropUsersTable)
// 	console.log({response})
// }
// dropTable()
