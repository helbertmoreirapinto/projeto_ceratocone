const mongoose = require('mongoose')
const { MONGO_URL } = require('../config/env')
const mongoParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}

const connect = () => {
  return mongoose.connect(MONGO_URL, mongoParams)
}

const closeConnection = () => {
  return mongoose.connection.close()
}

module.exports = {
  connect,
  closeConnection
}
