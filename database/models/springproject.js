'use strict'
module.exports = (sequelize, DataTypes) => {
  const SpringProject = sequelize.define('SpringProject', {
    img: DataTypes.STRING,
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {})
  SpringProject.associate = function (models) {
    // associations can be defined here
  }
  return SpringProject
}
