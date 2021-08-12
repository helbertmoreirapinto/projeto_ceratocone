const Sequelize = require('sequelize')
const database = require('../database')

const Exam = database.define('exam', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },

  exam_eye: {
    type: Sequelize.STRING,
    allowNull: false
  },

  exam_date: {
    type: Sequelize.DATE,
    allowNull: false

  },

  exam_hour: {
    type: Sequelize.TIME,
    allowNull: false

  }
})

module.exports = Exam
