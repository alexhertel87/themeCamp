'use strict';
module.exports = (sequelize, DataTypes) => {
  const GiftItems = sequelize.define('GiftItems', {
    campId: DataTypes.INTEGER,
    music: DataTypes.BOOLEAN,
    fireFeatures: DataTypes.BOOLEAN,
    beverages: DataTypes.BOOLEAN,
    food: DataTypes.BOOLEAN,
    ice: DataTypes.BOOLEAN,
    artCar: DataTypes.BOOLEAN
  }, {});
  GiftItems.associate = function(models) {
    // associations can be defined here
  };
  return GiftItems;
};