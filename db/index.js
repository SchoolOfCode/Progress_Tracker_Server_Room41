import pg from 'pg'
import {dbConfig} from '../config.js'
const pool = new pg.Pool({
	connectionString: dbConfig.db_url,
	ssl: {rejectUnauthorized: false},
})
export default async function query(text, params) {
	const res = await pool.query(text, params)
	console.log('This is the query: ', res)
	return res
}
