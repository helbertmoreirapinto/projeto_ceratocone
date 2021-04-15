const { ApolloError, ForbiddenError, AuthenticationError } = require('apollo-server')

const apolloErrorDictionary = {
  FORBIDDEN (error) { return new ForbiddenError(error.message) },
  UNAUTHENTICATED (error) { return new AuthenticationError(error.message) }
}

function handle (error) {
  console.log(error)
  const errorCode = error.extensions.exception.code || error.extensions.code
  const errorMessage = error.message

  if (errorCode === 'INTERNAL_SERVER_ERROR') return error

  const knownError = apolloErrorDictionary[errorCode]

  if (knownError) return knownError(error)

  return new ApolloError(errorMessage, errorCode)
}

module.exports = { handle }
