const {
  createWikiEntry,
} = require('../service/wikiEntryService')

const wikiEntryController = async ({body, url}) => {
  switch(url) {
    case '/api/wikiEntry': {
      const {error} = createWikiEntry(body)
    
      // TODO: currently in progress, I believe - unfinished, anyway

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