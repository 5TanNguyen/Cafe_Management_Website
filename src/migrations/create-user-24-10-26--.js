"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING(40),
      },
      password: {
        type: Sequelize.STRING(100),
      },
      firstName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      lastName: {
        type: Sequelize.STRING(50),
      },
      address: {
        type: Sequelize.STRING(100),
      },
      phonenumber: {
        type: Sequelize.STRING(10),
      },
      gender: {
        type: Sequelize.BOOLEAN,
      },
      image: {
        type: Sequelize.STRING(200),
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      role_id: {
        // Thêm cột type_id
        type: Sequelize.INTEGER,
        references: {
          model: "roles", // Tên bảng mà khóa ngoại tham chiếu
          key: "id", // Tên cột khóa chính trong bảng CustomerTypes
        },
        onUpdate: "CASCADE", // Hành động khi cập nhật
        onDelete: "SET NULL", // Hành động khi xóa
      },
      updatedAt: {
        allowNull: false,
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
