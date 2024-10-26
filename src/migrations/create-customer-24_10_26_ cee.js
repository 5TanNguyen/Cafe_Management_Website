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
      customer_type_id: {
        type: Sequelize.INTEGER,
        allowNull: true, // hoặc false tùy thuộc vào yêu cầu của bạn
        references: {
          model: "customertype", // tên bảng tham chiếu
          key: "id", // khóa chính trong bảng tham chiếu
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL", // hoặc 'CASCADE' tùy thuộc vào nhu cầu của bạn
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
