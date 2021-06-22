'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('StockImages', [
      { spotId: 1, url: 'frontend/public/Images/BM_2017_SR-1.jpeg'},
      { spotId: 2, url: 'frontend/public/Images/BM_2017_SR-2.jpeg' },
      { spotId: 3, url: 'frontend/public/Images/BM_2017_SR-3.jpeg' },
      { spotId: 4, url: 'frontend/public/Images/BM_2017_SR-4.jpeg' },
      { spotId: 5, url: 'frontend/public/Images/BM_2017_SR-5.jpeg' },
      { spotId: 6, url: 'frontend/public/Images/BM_2017_SR-6.jpeg' },
      { spotId: 7, url: 'frontend/public/Images/BM_2017_SR-7.jpeg' },
      { spotId: 8, url: 'frontend/public/Images/BM_2017_SR-8.jpeg' },
      { spotId: 9, url: 'frontend/public/Images/BM_2017_SR-9.jpeg' },
      { spotId: 10, url: 'frontend/public/Images/BM_2017_SR-10.jpeg' },
      { spotId: 11, url: 'frontend/public/Images/BM_2017_SR-11.jpeg' },
      { spotId: 12, url: 'frontend/public/Images/BM_2017_SR-12.jpeg' },
      { spotId: 13, url: 'frontend/public/Images/BM_2017_SR-13.jpeg' },
      { spotId: 14, url: 'frontend/public/Images/BM_2017_SR-14.jpeg' },
      { spotId: 15, url: 'frontend/public/Images/BM_2017_SR-15.jpeg' },
      { spotId: 16, url: 'frontend/public/Images/BM_2017_SR-16.jpeg' },
      { spotId: 17, url: 'frontend/public/Images/BM_2017_SR-17.jpeg' },
      { spotId: 18, url: 'frontend/public/Images/BM_2017_SR-18.jpeg' },
      { spotId: 19, url: 'frontend/public/Images/BM_2017_SR-19.jpeg' },
      { spotId: 20, url: 'frontend/public/Images/BM_2017_SR-20.jpeg' },
      { spotId: 21, url: 'frontend/public/Images/BM_2017_SR-21.jpeg' },
      { spotId: 22, url: 'frontend/public/Images/BM_2017_SR-22.jpeg' },
      { spotId: 23, url: 'frontend/public/Images/BM_2017_SR-23.jpeg' },
      { spotId: 24, url: 'frontend/public/Images/BM_2017_SR-24.jpeg' },
      { spotId: 25, url: 'frontend/public/Images/BM_2017_SR-25.jpeg' },
      { spotId: 26, url: 'frontend/public/Images/BM_2017_SR-26.jpeg' },
      { spotId: 27, url: 'frontend/public/Images/BM_2017_SR-27.jpeg' },
      { spotId: 28, url: 'frontend/public/Images/BM_2017_SR-28.jpeg' },
      { spotId: 29, url: 'frontend/public/Images/BM_2017_SR-29.jpeg' },
      { spotId: 30, url: 'frontend/public/Images/BM_2017_SR-30.jpeg' },
      { spotId: 31, url: 'frontend/public/Images/BM_2017_SR-31.jpeg' },
      { spotId: 32, url: 'frontend/public/Images/BM_2017_SR-32.jpeg' },
      { spotId: 33, url: 'frontend/public/Images/BM_2017_SR-33.jpeg' },
      { spotId: 34, url: 'frontend/public/Images/BM_2017_SR-34.jpeg' },
      { spotId: 35, url: 'frontend/public/Images/BM_2017_SR-35.jpeg' },
      { spotId: 36, url: 'frontend/public/Images/BM_2017_SR-36.jpeg' },
      { spotId: 37, url: 'frontend/public/Images/BM_2017_SR-37.jpeg' },
      { spotId: 38, url: 'frontend/public/Images/BM_2017_SR-38.jpeg' },
      { spotId: 39, url: 'frontend/public/Images/BM_2017_SR-39.jpeg' },
      { spotId: 40, url: 'frontend/public/Images/BM_2017_SR-40.jpeg' },
      { spotId: 41, url: 'frontend/public/Images/BM_2017_SR-41.jpeg' },
      { spotId: 42, url: 'frontend/public/Images/BM_2017_SR-42.jpeg' },
      { spotId: 43, url: 'frontend/public/Images/BM_2017_SR-43.jpeg' },
      { spotId: 44, url: 'frontend/public/Images/BM_2017_SR-44.jpeg' },
      { spotId: 45, url: 'frontend/public/Images/BM_2017_SR-45.jpeg' },
      { spotId: 46, url: 'frontend/public/Images/BM_2017_SR-46.jpeg' },
      { spotId: 47, url: 'frontend/public/Images/BM_2017_SR-47.jpeg' },
      { spotId: 48, url: 'frontend/public/Images/BM_2017_SR-48.jpeg' },
      { spotId: 49, url: 'frontend/public/Images/BM_2017_SR-49.jpeg' },
      { spotId: 50, url: 'frontend/public/Images/BM_2017_SR-50.jpeg' },
      { spotId: 51, url: 'frontend/public/Images/BM_2017_SR-51.jpeg' },
      { spotId: 52, url: 'frontend/public/Images/BM_2017_SR-52.jpeg' },
      { spotId: 53, url: 'frontend/public/Images/BM_2017_SR-53.jpeg' },
      { spotId: 54, url: 'frontend/public/Images/BM_2017_SR-54.jpeg' },
      { spotId: 55, url: 'frontend/public/Images/BM_2017_SR-55.jpeg' },
      { spotId: 56, url: 'frontend/public/Images/BM_2017_SR-56.jpeg' },
      { spotId: 57, url: 'frontend/public/Images/BM_2017_SR-57.jpeg' },
      { spotId: 58, url: 'frontend/public/Images/BM_2017_SR-58.jpeg' },
      { spotId: 59, url: 'frontend/public/Images/BM_2017_SR-59.jpeg' },
      { spotId: 61, url: 'frontend/public/Images/BM_2017_SR-61.jpeg' },
      { spotId: 62, url: 'frontend/public/Images/BM_2017_SR-62.jpeg' },
      { spotId: 63, url: 'frontend/public/Images/BM_2017_SR-63.jpeg' },
      { spotId: 64, url: 'frontend/public/Images/BM_2017_SR-64.jpeg' },
      { spotId: 65, url: 'frontend/public/Images/BM_2017_SR-65.jpeg' },
      { spotId: 66, url: 'frontend/public/Images/BM_2017_SR-66.jpeg' },
      { spotId: 67, url: 'frontend/public/Images/BM_2017_SR-67.jpeg' },
      { spotId: 68, url: 'frontend/public/Images/BM_2017_SR-68.jpeg' }
     ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
