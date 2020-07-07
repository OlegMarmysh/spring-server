const Sequelize = require('sequelize');

module.exports = class SpringAtticProjects extends Sequelize.Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        img: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        body: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        tableName: 'SpringAtticProjects',
        sequelize,
      },
    );
  }

  static associate(models) {
  }
};
