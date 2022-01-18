//import express
import express from 'express'
//import the functions from models.getScores.js
import * as queries from '../models/getScores.js'
//instantiate router from express.Router()
const router = express.Router()
//create routes for the api

/* GET users listing. */
//GET all users
router.get('/', async function (req, res, next) {
	const data = await queries.getAllUsers()
	res.json({success: true, payload: data})
})
//GET users by ID
router.get('/:id', async function (req, res, next) {
	const id = Number(req.params.id)
	const data = await queries.getUserByID(id)
	res.json({success: true, payload: data})
})
//GET users by ID
router.post('/users', async function (req, res, next) {
	let createdUser = await createUser(req.body)
	res.json({success: true, payload: createdUser})
})

export default router
