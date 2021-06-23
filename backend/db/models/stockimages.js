'use strict';
module.exports = (sequelize, DataTypes) => {
  const StockImages = sequelize.define('StockImages', {
    spotId: DataTypes.INTEGER,
    url: DataTypes.STRING(255)
  }, {});
  StockImages.associate = function(models) {
    // associations can be defined here
  };
  return StockImages;
};
