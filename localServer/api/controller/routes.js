const staticDataController = require('./staticDataController')
const wikiEntryController = require('./wikiEntryController')

const databaseRouter = (call) => {
  staticDataController(call)
  wikiEntryController(call)
  
}

module.exports = databaseRouter