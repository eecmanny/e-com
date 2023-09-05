const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Ecommerce extends Model {}

Tag.init(
  {
    // Exactly off readme file
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },

    product_name: {
      type: DataTypes.STRING
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ecommerce',
  }
);

module.exports = Tag;
