const { gql } = require('apollo-server')

module.exports = gql`
  extend type Query {
    login (
      login: String!
      password: String!
    ): String
  }
  
  extend type Mutation {
    signup (
      name: String!
      login: String!
      password: String!
      confirmationPassword: String!
    ): User
  }

  type User {
    id: String
    name: String
    login: String
  }
`
