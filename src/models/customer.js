"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Userr.belongsTo(models.Role, { foreignKey: 'role_code', targetKey: 'code', as: 'roleData'})
    }
  }
  Customer.init(
    {
      firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING(50),
      },
      address: {
        type: DataTypes.STRING(100),
      },
      email: {
        type: DataTypes.STRING(40),
      },
      password: {
        type: DataTypes.STRING(50),
      },
      gender: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      phone: {
        type: DataTypes.STRING(10),
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};
