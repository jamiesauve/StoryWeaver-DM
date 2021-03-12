const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const call = express()
const port = 4204

// const databaseApi = require('./api/controller/routes')

call.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

call.use(bodyParser.json()) 

// databaseApi(call)

call.listen(port, () => console.log(`Listening on port ${port}`))