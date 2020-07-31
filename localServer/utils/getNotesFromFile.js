const fs = require('fs')

const { parseNoteStringToData } = require('./parseNoteStringToData')

const getNotesFromFile = async () => {
  return new Promise((resolve, reject) => {
    // fs.readFile('./notes/attempt.txt', {encoding: 'utf-8'}, (err, noteString) => {
    //   if (err) reject('error:', err)
    
    //   resolve(parseNoteStringToData(noteString))
    // })
    const newDirectory = './creatures';
    if (!fs.existsSync(newDirectory)) {
      fs.mkdir(newDirectory);

      resolve(`${newDirectory} was created.`);
    }

    reject('Directory already exists');
  })
}

module.exports = {
  getNotesFromFile
}
