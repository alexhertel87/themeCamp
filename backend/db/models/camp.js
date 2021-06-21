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
    Camp.belongsTo(models.Reservation, { foreignKey: 'campId' })
    Camp.hasMany(models.Review, { foreignKey: 'campId' })
    Camp.hasMany(models.Image, { foreignKey: 'campId' })
    Camp.hasMany(models.GiftItem, {foreignKey: 'campId'})
  };
  return Camp;
};
