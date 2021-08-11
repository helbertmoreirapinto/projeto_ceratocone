const app = require('./app')
const sqlite3 = require('sqlite3').verbose();

const port = process.env.PORT || 3333

app.listen({ port }, () => {
  let db = new sqlite3.Database('./db/kclabel.db', (err) => {
    if (err) return console.error(err.message);
    console.log('Connected to the in-memory SQlite database.');
  });
  console.log(`Server ready on PORT ${port}`)
})
