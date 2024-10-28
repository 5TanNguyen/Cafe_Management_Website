"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Role_permissions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      role_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "roles", // Tên bảng mà khóa ngoại tham chiếu
          key: "id", // Tên cột khóa chính trong bảng CustomerTypes
        },
        onUpdate: "CASCADE", // Hành động khi cập nhật
        onDelete: "SET NULL", // Hành động khi xóa
      },
      permission_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "permissions", // Tên bảng mà khóa ngoại tham chiếu
          key: "id", // Tên cột khóa chính trong bảng CustomerTypes
        },
        onUpdate: "CASCADE", // Hành động khi cập nhật
        onDelete: "SET NULL", // Hành động khi xóa
      },
      createdAt: {
        allowNull: false,
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Role_permissions");
  },
};
