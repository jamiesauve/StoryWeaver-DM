const _ = require('lodash')

const itemController = require('./itemController')
const staticDataController = require('./staticDataController')
const trackNamesController = require('./trackNamesController')
const wikiEntryController = require('./wikiEntryController')

const databaseRouter = ({ body, url }) => {
  return Promise.all([
    itemController({ body, url }),
    staticDataController({ body, url }),
    trackNamesController({ body, url }),
    wikiEntryController({ body, url }),
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
  }).catch((e) => console.log('error:', e))
}

module.exports = databaseRouter