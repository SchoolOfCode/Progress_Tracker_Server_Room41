import pg from 'pg'
import {dbConfig} from '../config.js'
const pool = new pg.Pool({
	connectionString: dbConfig.db_url,
	// user: dbConfig.user,
	// host: dbConfig.host,
	// database: dbConfig.database,
	// password: dbConfig.password,
	// port: dbConfig.port,
	ssl: {rejectUnauthorized: false},
})
export default async function query(text, params) {
	const res = await pool.query(text, params)
	console.log('This is the query: ', res)
	return res
}
