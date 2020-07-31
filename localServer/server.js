const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()
const port = 4204

// const { getNotesFromFile } = require('./utils/getNotesFromFile')
// const { parseDataToNoteString } = require('./utils/parseDataToNoteString')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(bodyParser.json()) 

app.get('/', (req, res) => {
  res.send('hello world!')
})

// app.get('/creatures', (req, res) => {
//   console.log('boo');
//   getNotesFromFile()
//   .then((successMessage) => {  
//     const responseWithThis = [successMessage]
//     console.log(responseWithThis)
//     res.header({'Content-Type': 'application/json'})
//     res.status(200)
//     res.json(responseWithThis)
//   })
// })

// app.post('/create', (req, res) => {
  
//   const {
//     body : {
//       data // split this out farther
//     }
//   } = req

//   console.log('data', data.noteObj)
//   const noteString = parseDataToNoteString(data.noteObj)

//   fs.writeFile(`./notes/${data.fileName}`, noteString, function (err) { // use UUIDs for file names
//     if (err) {
//       res.status(500).send("fail")
//     } else {
//       res.status(200).send("success")
//     }
//   })
// })

app.listen(port, () => console.log(`Listening on port ${port}`))