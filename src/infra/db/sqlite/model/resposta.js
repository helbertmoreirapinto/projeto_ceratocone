const Sequelize = require('sequelize')
const database = require('../../../../../db-index')

const Resposta = database.define('respostas', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  patientId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  examDate: {
    type: Sequelize.STRING,
    allowNull: false
  },
  examHour: {
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

module.exports = Resposta
