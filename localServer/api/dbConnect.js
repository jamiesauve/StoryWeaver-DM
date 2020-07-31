const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./localServer/database/story_weaver.db', sqlite3.OPEN_READWRITE, err => {
  if (err) console.log('error during db connection:', err)
  else console.log('successfully connected to the db.')
})

module.exports = db;