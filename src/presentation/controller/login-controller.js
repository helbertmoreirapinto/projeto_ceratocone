const UserModel = require('../../infra/db/mongo/model/user')

const login = async (parent, args, context) => {
  const { login, password } = args
  const users = await UserModel.find({
    login, password
  })

  console.log(users)
}

const signup = async (parent, args, context) => {
  const { login, password } = args
  const user = await UserModel.find({ login })
  if (user) throw new Error('Duplicated Login')

  return await UserModel.create({ login, password })
}

module.exports = {
  login,
  signup
}
