const {
  getStaticData,
} = require('../service/staticDataService')

const staticDataController = (call) => {
  call.get('/api/staticData', async (req, res) => {
    const staticData = await getStaticData()

    res
    .status(200)
    .send(staticData)
  })
}

module.exports = staticDataController