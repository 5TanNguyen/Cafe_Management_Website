"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Notifications", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING(50),
      },
      content: {
        type: Sequelize.STRING(150),
      },
      type: {
        type: Sequelize.INTEGER,
      },
      created_user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users", // Tên bảng mà khóa ngoại tham chiếu
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
      deletedAt: {
        allowNull: true,
        type: "TIMESTAMP",
        defaultValue: null,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Notifications");
  },
};
