const _ = require('lodash')

const db = require('../dbConnect')

const getStaticData = async () => {  
  const colors = await getColors()
  const wikiEntryTypes = await getWikiEntryTypes()

  return {
    colors,
    wikiEntryTypes,
  }  
}

const getColors = async () => {  
  return new Promise((resolve, reject) => {
    const sql = `
      SELECT 
        name,
        code
      FROM 
        color;
    `

    db.all(
      sql, 
      (error, rows) => {
        if (error) reject(error)
        
        const colors = {}
          
        _.forEach(rows, row => {
          colors[row.name] = row.code
        })

        resolve(colors)
      }
    )
  })
}

const getWikiEntryTypes = async () => {  
  return new Promise((resolve, reject) => {
    const sql = `
      SELECT 
        main_type AS mainType,
        sub_type AS subType
      FROM 
        wiki_entry_type;
    `

    db.all(
      sql, 
      (error, rows) => {
        if (error) reject(error)
        
        const wikiEntryTypes = {}
          
        _.forEach(rows, row => {
          if (_.isUndefined(wikiEntryTypes[row.mainType])) {
            wikiEntryTypes[row.mainType] = {}
          }
          wikiEntryTypes[row.mainType][row.subType] = {
            mainType: row.mainType,
            subType: row.subType,
          }
        })

        resolve(wikiEntryTypes)
      }
    )
  })
}

module.exports = {
  getStaticData,
}