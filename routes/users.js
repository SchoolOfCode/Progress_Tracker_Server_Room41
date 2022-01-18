//import express
import express from 'express'
//import the functions from models.getUsers.js
import * as queries from '../models/getUsers.js'
//instantiate router from express.Router()
const router = express.Router()
//create routes for the api

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
//POST create user
router.post('/', async function (req, res, next) {
	const {name} = req.body
	let createdUser = await queries.createUser(name)
	console.log('createdUser: ', createdUser)
	res.json({success: true, payload: createdUser})
})

export default router