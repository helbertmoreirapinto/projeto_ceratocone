const { gql } = require('apollo-server')
const Login = require('./login')
const Exam = require('./exam')

const Default = gql`
  type Query {
    _default: String
  },
  type Mutation {
    _default: String
  }
`

module.exports = [
  Default,
  Login,
  Exam
]
