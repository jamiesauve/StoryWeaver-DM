const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./localServer/database/story_weaver.db', sqlite3.OPEN_READWRITE, err => {
  if (err) console.log('error during db connection:', err)
  else console.log('successfully connected to the db.')
})

const databaseRouter = (app) => {
  app.get('/api/colors', (req, res) => {
    db.all(`
      SELECT * FROM color;
    `, (error, rows) => {
      if (error) {
        console.log(error)
        res.status(400).send(error)
      } 
      else res.status(200).send(rows);
    })
  })
}

module.exports = databaseRouter