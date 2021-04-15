const loginController = require('../../presentation/controller/login-controller')

module.exports = {
  Query: {
    login: loginController.login
  },

  Mutation: {
    signup: loginController.signup
  }
}
