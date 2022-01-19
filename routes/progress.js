//import express
import express from 'express'
// import cors from 'cors'
//import the functions from models.getUsers.js
import * as queries from '../models/getStats.js'
//instantiate router from express.Router()
const router = express.Router()
//create routes for the api

//GET stats by week, day or all stats
// const {week, day} = req.query
// 	if (week) {
// 		const data = await queries.getStatsByWeek()
// 		res.json({success: true, payload: data})
// 	} else if (day) {
// 		const data = await queries.getStatsByDay()
// 		res.json({success: true, payload: data})
// 	} else {
router.get('/', async function (req, res, next) {
	const data = await queries.getAllStats()
	res.json({success: true, payload: data})
})

//POST create stats
router.post('/', async function (req, res, next) {
	const {week, day, score} = req.body
	let createdStats = await queries.createStats(week, day, score)
	console.log('createdStats: ', createdStats)
	res.json({success: true, payload: createdStats})
})

export default router
