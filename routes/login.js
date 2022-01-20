//import express
import express from 'express'
//import the functions from models.getUsers.js
import * as queries from '../models/getUsers.js'
//instantiate router from express.Router()
const router = express.Router()
//create routes for the api

// //GET user by name or all users
router.get('/', async function (req, res, next) {
	const {name, password} = req.query
	if (name && password) {
		const data = await queries.getSignUpUser(name, password)
		res.json({success: true, payload: ` getSignUp user: ${data}`})
		return
	} else {
		const data = await queries.getAllUsers()
		res.json({success: true, payload: data})
	}
})

//POST find  user
router.post('/', async function (req, res, next) {
	const {name, password} = req.body
	let foundUser = await queries.getSignUpUser(name, password)
	console.log('foundUser: ', foundUser)

	res.json({success: true, payload: foundUser})
})

export default router
