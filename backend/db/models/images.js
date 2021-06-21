'use strict';
module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define('Images', {
    campId: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {});
  Images.associate = function(models) {
    // associations can be defined here
  };
  return Images;
};