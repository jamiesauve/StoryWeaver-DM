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
        main.color;
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
        wegt.name AS mainType,
        wet.name AS subType
      FROM 
        main.wiki_entry_type AS wet
      JOIN
        main.wiki_entry_group_type AS wegt
          ON
            wet.wiki_entry_group_type_id = wegt.id
    ;`

    // TODO: rename the mainType/subType stuff across the app
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