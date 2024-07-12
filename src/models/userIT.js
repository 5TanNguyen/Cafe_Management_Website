'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserIT extends Model {
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
  UserIT.init({
    email: {
      type: DataTypes.STRING(40)
    },
    password: {
      type: DataTypes.STRING(100)
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(50)
    },
    address: {
      type: DataTypes.STRING(100)
    },
    phonenumber: {
      type: DataTypes.STRING(20)
    },
    gender: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    image: {
      type: DataTypes.STRING(100)
    },
    roleId: {
      type: DataTypes.STRING(20)
    },
    positionId: {
      type: DataTypes.STRING(20)
    }
  }, {
    sequelize,
    modelName: 'UserIT',
  });
  return UserIT;
};