const Sequelize = require('sequelize')

const localhostConection = {
  DB_HOST: 'localhost',
  DB_PORT: '3000',
  DB_NAME: 'KCLabel',
  DB_USER: 'KCLabelAdmin',
  DB_PASS: 'yeIGJEABqOFffY1J'
}

const DB_HOST = process.env.DB_HOST || localhostConection.DB_HOST
const DB_PORT = process.env.DB_PORT || localhostConection.DB_PORT
const DB_NAME = process.env.DB_NAME || localhostConection.DB_NAME
const DB_USER = process.env.DB_USER || localhostConection.DB_USER
const DB_PASS = process.env.DB_PASS || localhostConection.DB_PASS

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  dialect: 'sqlite',
  host: DB_HOST,
  port: DB_PORT
})

module.exports = sequelize
