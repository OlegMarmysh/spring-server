const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config');

const env = process.env.NODE_ENV || 'development';
const databaseUrl = process.env.DATABSE_URL || config[env].url;

const db = new Sequelize(databaseUrl, {
  dialect: config[env].dialect,
  define: {
    timestamps: false,
  },
});

fs.readdirSync(__dirname).filter((file) => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file));
    model.init(db, Sequelize);
  });

Object.values(db.models)
  .filter((model) => typeof model.associate === 'function')
  .forEach((model) => model.associate(db.models));

module.exports = { client: db, ...db.models };
