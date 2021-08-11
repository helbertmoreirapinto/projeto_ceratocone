const app = require('./app')
const sqlite3 = require('sqlite3').verbose()

const port = process.env.PORT || 3333

app.listen({ port }, () => {
  (async () => {
    require('./infra/db')
  })()
  console.log(`Server ready on PORT ${port}`)
})
