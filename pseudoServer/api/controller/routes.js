const _ = require('lodash')

const staticDataController = require('./staticDataController')
const wikiEntryController = require('./wikiEntryController')

const databaseRouter = (request) => {
  return Promise.all([
    staticDataController(request),
    wikiEntryController(request),
  ]).then((results) => {
    const compactedResults = _.compact(results)

    if (compactedResults.length > 1) {
      return {
        error: "route was matched by too many endpoints",
        result: null,
      }
    } else if (_.isEmpty(compactedResults)) {
      return {
        error: "route was not matched by any endpoints",
        result: null
      }
    } else {
      return compactedResults[0]
    }
  })
}

module.exports = databaseRouter