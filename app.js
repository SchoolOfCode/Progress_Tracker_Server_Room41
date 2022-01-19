import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import logger from 'morgan'
import indexRouter from './routes/index.js'
import progresssRouter from './routes/progress.js'
import usersRouter from './routes/users.js'

const app = express()

app.use(cors({origin: 'https://vigilant-rosalind-f37987.netlify.app'}))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static('public'))

app.use('/', indexRouter)
app.use('/user', usersRouter)
app.use('/progress', progresssRouter)

export default app
