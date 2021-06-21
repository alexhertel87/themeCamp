'use strict';
module.exports = (sequelize, DataTypes) => {
  const GiftItem = sequelize.define('GiftItem', {
    campId: DataTypes.INTEGER,
    music: DataTypes.BOOLEAN,
    fireFeatures: DataTypes.BOOLEAN,
    beverages: DataTypes.BOOLEAN,
    food: DataTypes.BOOLEAN,
    ice: DataTypes.BOOLEAN,
    artCar: DataTypes.BOOLEAN
  }, {});
  GiftItem.associate = function(models) {
    GiftItem.belongsTo(models.Camp, {foreignKey: 'campId'})
  };
  return GiftItem;
};
