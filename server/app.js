const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001
const NODE_ENV = process.env.NODE_ENV || 'Dev'
const app = express()

const loginRouter = require('./routes/loginRoutes')
const signupRouter = require('./routes/signupRoutes')
const workoutlogRouter = require('./routes/workoutlogRoutes')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/api/login', loginRouter)
app.use('/api/signup', signupRouter)
app.use('/api/workoutlogs', workoutlogRouter)

app.listen(PORT, () => {
 console.log(`server is listening on port ${PORT} in ${NODE_ENV}`)
})
