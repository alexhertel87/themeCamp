'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Camps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER
      },
      campName: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(100)
      },
      address: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(50)
      },
      latitude: {
        allowNull: false,
        unique: true,
        type: Sequelize.DECIMAL
      },
      longitude: {
        allowNull: false,
        unique: true,
        type: Sequelize.DECIMAL
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
    return queryInterface.dropTable('Camps');
  }
};
