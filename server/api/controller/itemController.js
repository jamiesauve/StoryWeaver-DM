const {
  getItems,
} = require('../service/itemService')

const itemController = async ({body, url}) => {
  switch (url) {
    case '/api/items': {
      const items = await getItems()
      
      return ({
        error: null,
        result: items,
      })
    }

    default:
      return null
  }
}

module.exports = itemController