'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sumproducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      manager: {
        type: Sequelize.STRING
      },
      nameadmin: {
        type: Sequelize.STRING
      },
      usernameadmin: {
        type: Sequelize.STRING
      },
      nameproduct: {
        type: Sequelize.STRING
      },
      priceproduct: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sumproducts');
  }
};