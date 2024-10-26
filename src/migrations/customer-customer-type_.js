"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("customers", "customer_type_id", {
      type: Sequelize.INTEGER,
      allowNull: true, // hoặc false tùy thuộc vào yêu cầu của bạn
      references: {
        model: "customertypes", // tên bảng tham chiếu trong db
        key: "id", // khóa chính trong bảng tham chiếu
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL", // hoặc 'CASCADE' tùy thuộc vào nhu cầu của bạn
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("customers", "customer_type_id");
  },
};
