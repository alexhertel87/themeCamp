'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    reservationsId: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Reservation, { foreignKey: 'reservationsId' })
    Review.belongsTo(models.Camp, {foreignKey: 'campId'})
  };
  return Review;
};
