'use strict';
module.exports = (sequelize, DataTypes) => {
  const Camp = sequelize.define('Camp', {
    userId: DataTypes.INTEGER,
    campName: DataTypes.STRING,
    address: DataTypes.STRING,
    latitude: DataTypes.DECIMAL,
    longitude: DataTypes.DECIMAL
  }, {});
  Camp.associate = function(models) {
    // associations can be defined here
  };
  return Camp;
};