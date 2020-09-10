const {
  createWikiEntry,
} = require('../service/wikiEntryService')

const wikiEntryController = async (request) => {
  switch(request.endpoint) {
    case '/api/wikiEntry': {
      const {error} = createWikiEntry(request.body)
    
      return ({
        error: null,
        result: staticData,
      })
    }
    
    default:
      return null
  }
}

module.exports = wikiEntryController