import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import logger from 'morgan'
import indexRouter from './routes/index.js'
import loginRouter from './routes/login.js'
import progresssRouter from './routes/progress.js'
import registerRouter from './routes/register.js'

const app = express()
// {
// 	origin: 'https://vigilant-rosalind-f37987.netlify.app'
// }
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static('public'))

app.use('/', indexRouter)
app.use('/register', registerRouter)
app.use('/login', loginRouter)
app.use('/progress', progresssRouter)

export default app
