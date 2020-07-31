const staticDataController = require('./staticDataController')

const databaseRouter = (call) => {
  staticDataController(call)
  
}

module.exports = databaseRouter