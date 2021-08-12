const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')

const server = require('./index')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({
    status: 'OK'
  })
})

app.use(router)

const graphQLPath = '/'
app.use(graphQLPath, bodyParser.json({
  limit: '50mb'
}))

server.applyMiddleware({
  app,
  path: graphQLPath,
  cors: false
})

module.exports = app
