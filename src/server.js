const app = require('./app')
const database = require('./infra/db')

const port = process.env.PORT || 3333

app.listen({ port }, () => {
  database.connect()
  console.log(`Server ready on PORT ${port}`)
})
