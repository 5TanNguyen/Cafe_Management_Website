"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role_permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Role.hasMany(models.User, {foreignKey: 'role_code', as: 'role'})
      //Role.hasMany(models.Post, { foreignKey: 'roleId', as: 'role' })
    }
  }
  Role_permission.init(
    {
      role_id: {
        type: DataTypes.STRING(40),
      },
      permission_id: {
        type: DataTypes.STRING(100),
      },
    },
    {
      sequelize,
      modelName: "Role_permission",
    }
  );
  return Role_permission;
};
