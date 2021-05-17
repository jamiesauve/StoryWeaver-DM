const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const call = express()
const port = 4204

const trackNames = fs.readdirSync('./src/assets/ambiences');
trackNames.splice(0, 1);

call.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

call.use(bodyParser.json()) 

call.get('/', (req, res) => {
  res.send(trackNames);
})

call.listen(port, () => console.log(`Listening on port ${port}`))