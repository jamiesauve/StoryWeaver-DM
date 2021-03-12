const {
  getStaticData,
} = require('../service/staticDataService')

const staticDataController = async (request) => {
  switch (request.route) {
    case '/api/staticData': {
      const staticData = await getStaticData()

      return ({
        error: null,
        result: staticData,
      })
    }

    default:
      return null
  }
}

module.exports = staticDataController