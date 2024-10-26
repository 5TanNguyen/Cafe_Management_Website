"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
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
  Permission.init(
    {
      name: DataTypes.STRING(20),
      description: DataTypes.STRING(40),
    },
    {
      sequelize,
      modelName: "Permission",
    }
  );
  return Permission;
};
