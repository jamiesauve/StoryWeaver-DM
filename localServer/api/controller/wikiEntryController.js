const {
  createWikiEntry,
} = require('../service/wikiEntryService')

const wikiEntryController = (call) => {
  call.post('/api/wikiEntry', (req, res) => {
    const {
      body
    } = req

    console.log('body', body)

    const {error} = createWikiEntry(body)

    if (error) {
      res
      .status(400)
      .send(error)
    } else {
      res
      .status(200)
      .send()
    }
  })

}

module.exports = wikiEntryController