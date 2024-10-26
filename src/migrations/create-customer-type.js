"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Tạo bảng CustomerTypes
    await queryInterface.createTable("CustomerTypes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      code: {
        type: Sequelize.STRING(20),
      },
      value: {
        type: Sequelize.STRING(40),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    // Xóa bảng CustomerTypes
    await queryInterface.dropTable("CustomerTypes");
  },
};
