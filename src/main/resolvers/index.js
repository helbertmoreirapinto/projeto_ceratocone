const { merge } = require('lodash')
const Login = require('./login')
const Exam = require('./exam')

module.exports = merge(
  Login,
  Exam
)
