const { Schema, model } = require('mongoose')

let User = new Schema({
  login: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  }

}, {
  collection: 'users',
  strict: false,
  timestamps: true
})

User = model('User', User)

module.exports = User
