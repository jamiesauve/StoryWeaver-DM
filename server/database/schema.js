const { buildSchema } = require("graphql")

const db = require("../api/dbConnect")

const schema = buildSchema(`
  type Query {
    hello: String,
    colors: [Color!]!
  }

  type Color {
    id: Int!,
    name: String!
  }
`)

const root = {
  hello: () => {
    return `Hello World!`
  },
  colors(parent, args, context, info) {
    return new Promise((resolve, reject) => {
      db.all(
        `SELECT * FROM color;`, 
        (error, rows) => {
          if (error) reject(error)
    
          resolve(rows)
        }
      )
    })
  }
}

module.exports = {
  root,
  schema
}