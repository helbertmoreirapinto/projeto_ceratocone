const Sequelize = require('sequelize')
const database = require('../../../../../db-index')

const Usuario = database.define('usuario', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  login: {
    type: Sequelize.STRING,
    allowNull: false
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false
  },
  exameAtual: {
    type: Sequelize.INTEGER
  }
})

module.exports = Usuario
