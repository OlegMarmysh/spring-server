const configDevelopment = require('../config/db.config').development
const configProduction = require('../config/db.config').production
const Sequelize = require('sequelize')
let sequelize = null

if (configProduction.use_env_variable) {
  sequelize = new Sequelize(process.env[configProduction.use_env_variable],
    {
      dialect: configProduction.dialect,
      protocol: configProduction.protocol,
      logging: true
    })
} else {
  sequelize = new Sequelize(configDevelopment.DB, configDevelopment.USER, configDevelopment.PASSWORD, {
    host: configDevelopment.HOST,
    dialect: configDevelopment.dialect
  })
}

const db = {
  Sequelize,
  sequelize,
  users: require('./user.modele')(sequelize, Sequelize)
}

module.exports = db
