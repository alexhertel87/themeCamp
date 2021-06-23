'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('GiftItems', [
      {
        campId: 1,
        music: true,
        fireFeatures: true,
        beverages: true,
        food: false,
        ice: false,
        artCar: false
      },
      {
        campId: 2,
        music: false,
        fireFeatures: false,
        beverages: false,
        food: false,
        ice: true,
        artCar: false
      },{
        campId: 3,
        music: false,
        fireFeatures: false,
        beverages: true,
        food: true,
        ice: false,
        artCar: false
      },{
        campId: 4,
        music: true,
        fireFeatures: true,
        beverages: true,
        food: false,
        ice: false,
        artCar: false
      },{
        campId: 5,
        music: true,
        fireFeatures: false,
        beverages: true,
        food: false,
        ice: false,
        artCar: false
      },{
        campId: 6,
        music: true,
        fireFeatures: true,
        beverages: true,
        food: true,
        ice: true,
        artCar: false
      },{
        campId: 7,
        music: true,
        fireFeatures: true,
        beverages: true,
        food: false,
        ice: false,
        artCar: false
      },{
        campId: 8,
        music: true,
        fireFeatures: true,
        beverages: true,
        food: false,
        ice: false,
        artCar: false
      },{
        campId: 9,
        music: true,
        fireFeatures: true,
        beverages: true,
        food: true,
        ice: true,
        artCar: false
      },{
        campId: 10,
        music: true,
        fireFeatures: true,
        beverages: true,
        food: false,
        ice: false,
        artCar: true
      },{
        campId: 11,
        music: true,
        fireFeatures: true,
        beverages: true,
        food: false,
        ice: false,
        artCar: false
      },{
        campId: 12,
        music: true,
        fireFeatures: true,
        beverages: true,
        food: false,
        ice: false,
        artCar: false
      },{
        campId: 13,
        music: false,
        fireFeatures: true,
        beverages: false,
        food: false,
        ice: false,
        artCar: false
      },{
        campId: 14,
        music: false,
        fireFeatures: true,
        beverages: false,
        food: false,
        ice: false,
        artCar: false
      },{
        campId: 15,
        music: true,
        fireFeatures: false,
        beverages: false,
        food: false,
        ice: false,
        artCar: false
      },{
        campId: 16,
        music: true,
        fireFeatures: false,
        beverages: false,
        food: false,
        ice: false,
        artCar: false
      },{
        campId: 17,
        music: true,
        fireFeatures: false,
        beverages: false,
        food: false,
        ice: false,
        artCar: false
      },{
        campId: 18,
        music: true,
        fireFeatures: false,
        beverages: false,
        food: false,
        ice: false,
        artCar: false
      },{
        campId: 19,
        music: true,
        fireFeatures: true,
        beverages: false,
        food: false,
        ice: false,
        artCar: false
      },{
        campId: 20,
        music: true,
        fireFeatures: true,
        beverages: true,
        food: false,
        ice: false,
        artCar: false
      },{
        campId: 21,
        music: true,
        fireFeatures: true,
        beverages: false,
        food: false,
        ice: false,
        artCar: false
      },{
        campId: 22,
        music: false,
        fireFeatures: true,
        beverages: false,
        food: false,
        ice: false,
        artCar: false
      },{
        campId: 23,
        music: true,
        fireFeatures: true,
        beverages: true,
        food: false,
        ice: false,
        artCar: false
      },{
        campId: 24,
        music: true,
        fireFeatures: true,
        beverages: true,
        food: false,
        ice: false,
        artCar: false
      },{
        campId: 25,
        music: true,
        fireFeatures: true,
        beverages: true,
        food: true,
        ice: false,
        artCar: false
      },{
        campId: 26,
        music: true,
        fireFeatures: true,
        beverages: true,
        food: true,
        ice: false,
        artCar: false
      },{
        campId: 27,
        music: true,
        fireFeatures: true,
        beverages: true,
        food: true,
        ice: false,
        artCar: false
      },{
        campId: 28,
        music: true,
        fireFeatures: true,
        beverages: true,
        food: false,
        ice: false,
        artCar: false
      },

    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('GiftItems', null, {});

  }
};
