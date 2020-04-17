const configDevelopment = require('../config/db.config').development
const configProduction = require('../config/db.config').production
const Sequelize = require('sequelize')
let sequelize = null

if (process.env.DATABSE_URL) {
  sequelize = new Sequelize(process.env.DATABSE_URL,
    {
      dialect: configProduction.dialect,
      protocol: configProduction.protocol,
      logging: configProduction.logging
    })
} else {
  sequelize = new Sequelize(configDevelopment.DB, configDevelopment.USER, configDevelopment.PASSWORD, {
    host: configDevelopment.HOST,
    dialect: configDevelopment.dialect,
  })
}

const db = {
  Sequelize,
  sequelize,
  users: require('./user.modele')(sequelize, Sequelize)
}

module.exports = db
