const _ = require('lodash')

const db = require('../dbConnect')

const getItems = async () => {  
  return new Promise((resolve, reject) => {
    const sql = `
      SELECT 
        i.id,
        i.name AS label,
        i.description,
        i.effect,
        i.is_attunement_required AS isAttunementRequired,
        i.lore,
        c.code AS colorCode
      FROM 
        item AS i
      JOIN
        color AS c
          ON
            i.color_id = c.id
    ;`

    db.all(
      sql, 
      (error, rows) => {
        if (error) reject(error)

        resolve(rows)
      }
    )
  })
}

module.exports = {
  getItems,
}