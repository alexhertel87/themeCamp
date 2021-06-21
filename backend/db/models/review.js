'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    content: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};