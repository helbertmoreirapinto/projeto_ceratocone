const app = require('./app')

const port = process.env.PORT || 3333

async function start() {
  const database = require('../db-index')
  require('./infra/db/sqlite/model/usuario')
  require('./infra/db/sqlite/model/resposta')

  try {
    await database.sync()
  } catch (error) {
    console.log(error)
  }
}

app.listen({ port }, async () => {
  await start()
  console.log(`Server ready on PORT ${port}`)
})
