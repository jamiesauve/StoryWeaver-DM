const sqlite3 = require('sqlite3').verbose()
const _ = require('lodash')

const db = new sqlite3.Database('./localServer/database/story_weaver.db', sqlite3.OPEN_READWRITE, err => {
  if (err) console.log('error during db connection:', err)
  else console.log('successfully connected to the db.')
})

const databaseRouter = (app) => {
  app.get('/api/colors', (req, res) => {
    db.all(`
      SELECT 
        name,
        code
      FROM 
        color;
    `, 
    (error, rows) => {
      if (error) {
        console.log(error)
        res.status(400).send(error)
      } else {
        const colors = {}
        
        _.forEach(rows, row => (
          colors[row.name] = row.code
        ))

        res.status(200).send({ colors });
      }
    })
  })
}

module.exports = databaseRouter