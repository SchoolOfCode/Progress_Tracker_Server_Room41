//import express
import cors from 'cors'
import express from 'express'
//import the functions from models.getUsers.js
import * as queries from '../models/getUsers.js'
//instantiate router from express.Router()
const router = express.Router()
//create routes for the api

//GET user by name or all users
router.get('/', cors(), async function (req, res, next) {
	const {name} = req.query
	if (name) {
		const data = await queries.getUserByName(name)
		res.json({success: true, payload: data})
	} else {
		const data = await queries.getAllUsers()
		res.json({success: true, payload: data})
	}
})
//GET users by ID
router.get('/:id', cors(), async function (req, res, next) {
	const id = Number(req.params.id)
	const data = await queries.getUserByID(id)
	res.json({success: true, payload: data})
})

//POST create user
router.post('/', cors(), async function (req, res, next) {
	const {name, password} = req.body
	let createdUser = await queries.createUser(name, password)
	console.log('createdUser: ', createdUser)
	res.json({success: true, payload: createdUser})
})

export default router
