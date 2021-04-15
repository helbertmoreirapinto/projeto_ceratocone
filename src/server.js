const app = require('./app')
const mongo = require('./main/config/mongo')

mongo.connect()

const port = process.env.PORT || 3333

app.listen({ port }, () => {
  console.log(`Server ready on PORT ${port}`)
})
