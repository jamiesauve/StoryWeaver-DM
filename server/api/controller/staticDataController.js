const {
  getStaticData,
} = require('../service/staticDataService')

const staticDataController = async ({body, url}) => {
  switch (url) {
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