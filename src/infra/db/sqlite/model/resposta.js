const Sequelize = require('sequelize')
const database = require('../../../../../db-index')

const Produto = database.define('respostas', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  exameId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  usuarioId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  resposta: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Produto
