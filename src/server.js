const app = require('./app')

const port = process.env.PORT || 3333

async function start () {
  const database = require('../db-index')
  require('./infra/db/sqlite/model/usuario')
  require('./infra/db/sqlite/model/resposta')

  try {
    await database.sync()
  } catch (error) {
    console.log(error)
  }
}

async function startUsers () {
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

app.listen({ port }, async () => {
  await start()
  await startUsers()
  console.log(`Server ready on PORT ${port}`)
})
