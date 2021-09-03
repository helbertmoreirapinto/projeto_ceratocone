const app = require('./app')
// const https = require('https')
// const fs = require('fs')

const port = process.env.PORT || 3333

const start = async () => {
  const database = require('../db-index')
  require('./infra/db/sqlite/model/usuario')
  require('./infra/db/sqlite/model/resposta')
  await database.sync().catch(console.error)
}

const startUsers = async () => {
  const Usuario = require('./infra/db/sqlite/model/usuario')

  const usuarios = await Usuario.findAll()
  if (!usuarios.length) {
    await Promise.all([
      Usuario.create({ nome: 'Wallace Chamon', login: 'wchamon', senha: 'wchamon1234' }),
      Usuario.create({ nome: 'Felipe Taguchi', login: 'ftaguchi', senha: 'ftaguchi1234' }),
      Usuario.create({ nome: 'Edson Mori', login: 'emori', senha: 'emori1234' })
    ])
  }
}

// const privateKey = fs.readFileSync('sslcert/server.key', 'utf8')
// const certificate = fs.readFileSync('sslcert/server.crt', 'utf8')

// const credentials = { key: privateKey, cert: certificate }
// const httpsServer = https.createServer(app)

app.listen({ port }, async () => {
  await start()
  await startUsers()
  console.log(`Server ready on PORT ${port}`)
})
