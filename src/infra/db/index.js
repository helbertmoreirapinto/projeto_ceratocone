const database = require('./database')

async function start () {
  require('./migrations/exam')
  database.sync()
}

module.exports = {
  start
}
