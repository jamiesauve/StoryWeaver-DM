/**
 * parses a note string into a data object using the delimiters in the note.
 * 
 * @param {string} noteString the string to parse into a note object
 * 
 * @return {object} the note object
 */
const parseNoteStringToData = (noteString) => {
  const noteSectionsDelimiter = '$^^$' 
  
  const [title, body] = noteString.split(noteSectionsDelimiter)
  
  const noteObj = {
    title,
    body
  }

  return noteObj
}

module.exports = {
  parseNoteStringToData,
}