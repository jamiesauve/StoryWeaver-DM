/**
 * parses a note from a data object into a string with delimiters
 * 
 * @param {object} data all the data to create a note
 * 
 * @return {string} the note parsed into a string with delimiters added
 */
const parseDataToNoteString = (data) => {
  const noteSectionsDelimiter = '$^^$' 

  const note = [data.title, data.body]

  const noteString = note.join(noteSectionsDelimiter)

  return noteString
}

module.exports = {
  parseDataToNoteString,
}