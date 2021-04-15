const loginController = require('../../presentation/controller/login-controller')

module.exports = {
  Mutation: {
    login: loginController.login,
    signup: loginController.signup
  }
}
