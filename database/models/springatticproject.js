'use strict'
module.exports = (sequelize, DataTypes) => {
  const SpringAtticProject = sequelize.define('SpringAtticProject', {
    img: DataTypes.STRING,
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {})
  SpringAtticProject.associate = function (models) {
    // associations can be defined here
  }
  return SpringAtticProject
}
