import pg from 'pg'
import {dbConfig} from '../config.js'
const pool = new pg.Pool({
	user: dbConfig.user,
	host: dbConfig.host,
	database: dbConfig.database,
	password: dbConfig.password,
	port: dbConfig.port,
	ssl: {rejectUnauthorized: false},
})
export default function query(text, params) {
	const res = pool.query(text, params)
	console.log('This is the query: ', res)
	return res
}
