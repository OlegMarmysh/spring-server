const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const configDevelopment = require('../config/config').development
const configProduction = require('../config/config').production
const basename = path.basename(__filename)

let sequelize
const db = {}

if (process.env.DATABSE_URL) {
  sequelize = new Sequelize(process.env.DATABSE_URL,
    {
      dialect: configProduction.dialect,
      protocol: configProduction.protocol,
      logging: configProduction.logging
    })
} else {
  const DB_URL = `postgres://${configDevelopment.username}:${configDevelopment.password}@${configDevelopment.host}/${configDevelopment.database}`
  sequelize = new Sequelize(DB_URL,
    {
      dialect: configDevelopment.dialect,
      port: configDevelopment.port
    })
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

module.exports = db
