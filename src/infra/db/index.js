
function connect () {
  const database = require('./database')
  require('./migrations/exam')
  database.sync()
}

module.exports = {
  connect
}
