'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserITs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING(40)
      },
      password: {
        type: Sequelize.STRING(100)
      },
      firstName: {
        type: Sequelize.STRING(50)
      },
      lastName: {
        type: Sequelize.STRING(50)
      },
      address: {
        type: Sequelize.STRING(100)
      },
      gender: {
        type: Sequelize.BOOLEAN
      },
      roleId: {
        type: Sequelize.STRING(20)
      },
      phonenumber: {
        type: Sequelize.STRING(20)
      },
      positionId: {
        type: Sequelize.STRING(20)
      },
      image: {
        type: Sequelize.STRING(100)
      },
      createdAt: {
        allowNull: false,
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserITs');
  }
};