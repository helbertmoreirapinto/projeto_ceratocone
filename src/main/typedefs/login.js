const { gql } = require('apollo-server')

module.exports = gql`
  extend type Mutation {
    login (
      login: String!
      password: String!
    ): Boolean

    signup (
      name: String!
      login: String!
      password: String!
      confirmationPassword: String!
    ): User
  }

  type User {
    id: ID
    name: String
    login: String
  }
`
