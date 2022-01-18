import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import logger from 'morgan'
import indexRouter from './routes/index.js'
import usersRouter from './routes/users.js'

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static('public'))

app.use('/', indexRouter)
app.use('/user', usersRouter)

export default app