const express = require('express')
const bodyParser = require('body-parser')

const call = express()
const port = 4204

const databaseApi = require('./api/controller/routes')

call.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

call.use(bodyParser.json()) 

call.use(async function(req, res) {
  const { error, result } = await databaseApi({
    body: req.body,
    url: req.url,
  })

  if (error) {
    res.status(500).send(error)
  }
  
  res.status(200).send(result);
})

call.listen(port, () => console.log(`Listening on port ${port}`))