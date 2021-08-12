const { ApolloServer } = require('apollo-server-express')
const resolvers = require('./main/resolvers')
const typeDefs = require('./main/typedefs')
const errorHandlerService = require('./main/errors/apollo-error-handler')

const { PLAYGROUND, DEBUG } = process.env

module.exports = new ApolloServer({
  typeDefs,
  resolvers,
  playground: parseInt(PLAYGROUND),
  debug: parseInt(DEBUG),

  formatError: (e) => errorHandlerService.handle(e),

  context: ({ req }) => {
    req.headers.loggedUserId = req.headers.userData ? req.headers.userData.id : null
    return req.headers
  }
})
