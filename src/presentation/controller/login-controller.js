const UserModel = require('../../infra/db/mongo/model/user')

const login = async (parent, args, context) => {
  const { login, password } = args
  console.log(args)
  const user = await UserModel.find({
    login, password
  })
  return (user.length) ? user[0]._id : null
}

const signup = async (parent, args, context) => {
  const { login, password } = args
  const user = await UserModel.find({ login })
  // if (user) throw new Error('Duplicated Login')

  return await UserModel.create({ login, password })
}

module.exports = {
  login,
  signup
}
