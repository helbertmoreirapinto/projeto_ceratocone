const Sequelize = require('sequelize')
const sqlite3 = require('sqlite3').verbose()

const localhostConnection = {
  DB_HOST: 'localhost',
  DB_PORT: '3000',
  DB_NAME: 'KCLabel',
  DB_USER: 'KCLabelAdmin',
  DB_PASS: 'yeIGJEABqOFffY1J'
}

const DB_HOST = process.env.DB_HOST || localhostConnection.DB_HOST
const DB_PORT = process.env.DB_PORT || localhostConnection.DB_PORT
const DB_NAME = process.env.DB_NAME || localhostConnection.DB_NAME
const DB_USER = process.env.DB_USER || localhostConnection.DB_USER
const DB_PASS = process.env.DB_PASS || localhostConnection.DB_PASS

// const db = new sqlite3.Database(`${DB_NAME}`)

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  dialect: 'sqlite',
  host: DB_HOST,
  port: DB_PORT
})

module.exports = sequelize
