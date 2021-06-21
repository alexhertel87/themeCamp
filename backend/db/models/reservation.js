'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    userId: DataTypes.INTEGER,
    campId: DataTypes.INTEGER,
    reviewId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  Reservation.associate = function(models) {
    Reservation.hasMany(models.Review, { foreignKey: 'reservationsId'})
  };
  return Reservation;
};
