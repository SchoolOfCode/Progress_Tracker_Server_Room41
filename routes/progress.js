//import express
import express from 'express'
// import cors from 'cors'
//import the functions from models.getUsers.js
import * as queries from '../models/getStats.js'
//instantiate router from express.Router()
const router = express.Router()
//create routes for the api

router.get('/', async function (req, res, next) {
	const data = await queries.getAllStats()
	res.json({success: true, payload: data})
})

//POST create stats
router.post('/', async function (req, res, next) {
	const {week, day, score, link_id} = req.body
	let createdStats = await queries.createStats(week, day, score, link_id)
	console.log('createdStats: ', createdStats)
	res.json({success: true, payload: createdStats})
})

export default router
