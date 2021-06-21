'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('GiftItems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      campId: {
        type: Sequelize.INTEGER
      },
      music: {
        type: Sequelize.BOOLEAN
      },
      fireFeatures: {
        type: Sequelize.BOOLEAN
      },
      beverages: {
        type: Sequelize.BOOLEAN
      },
      food: {
        type: Sequelize.BOOLEAN
      },
      ice: {
        type: Sequelize.BOOLEAN
      },
      artCar: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('GiftItems');
  }
};