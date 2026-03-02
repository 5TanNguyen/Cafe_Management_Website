"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_role extends Model {
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
  User_role.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
      },
      role_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "User_role",
    }
  );
  return User_role;
};
