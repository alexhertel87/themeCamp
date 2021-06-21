'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    campId: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.Camp, {foreignKey: 'campId'})
  };
  return Image;
};
