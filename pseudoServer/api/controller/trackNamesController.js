const fs = require('fs')

const trackNames = fs.readdirSync('./src/assets/ambiences');
trackNames.splice(0, 1);

const trackNamesController = async ({body, url}) => {
  switch (url) {
    case '/api/trackNames': {
      return ({
        error: null,
        result: trackNames,
      })
    }

    default:
      return null
  }
}

module.exports = trackNamesController