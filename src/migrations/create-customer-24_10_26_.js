"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Tạo bảng Customers
    await queryInterface.createTable("Customers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
      email: {
        type: Sequelize.STRING(40),
      },
      password: {
        type: Sequelize.STRING(50),
      },
      gender: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      phone: {
        type: Sequelize.STRING(10),
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      type_id: {
        // Thêm cột type_id
        type: Sequelize.INTEGER,
        references: {
          model: "customerType", // Tên bảng mà khóa ngoại tham chiếu
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
    // Xóa bảng Customers
    await queryInterface.dropTable("Customers");
  },
};
