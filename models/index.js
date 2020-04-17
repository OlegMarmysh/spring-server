const configDevelopment = require('../config/db.config').development
const configProduction = require('../config/db.config').production
const Sequelize = require('sequelize')
let sequelize = null

if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
  sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL,
    {
      dialect: configProduction.dialect,
      protocol: configProduction.protocol,
      port: configProduction.port,
      host: configProduction.host,
      logging: true
    })
} else {
  sequelize = new Sequelize(configDevelopment.DB, configDevelopment.USER, configDevelopment.PASSWORD, {
    host: configDevelopment.HOST,
    dialect: configDevelopment.dialect,

    pool: {
      max: configDevelopment.pool.max,
      min: configDevelopment.pool.min,
      acquire: configDevelopment.pool.acquire,
      idle: configDevelopment.pool.idle
    }
  })
}

const db = {
  Sequelize,
  sequelize,
  users: require('./user.modele')(sequelize, Sequelize)
}

module.exports = db
