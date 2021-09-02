const UserModel = require('../../infra/db/sqlite/model/usuario')

const login = async (parent, args, context) => {
  const { login, password: senha } = args
  const user = await UserModel.findOne({
    login, senha
  })
  return (user) ? user.id : null
}

const signup = async (parent, args, context) => {
  const { login, password } = args

  return await UserModel.create({ login, senha: password })
}

module.exports = {
  login,
  signup
}
