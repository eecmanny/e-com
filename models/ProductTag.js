const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // Exactly off readme file
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    card_number: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
    },
    reader_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'reader',
        key: 'id',
      },
    },
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
