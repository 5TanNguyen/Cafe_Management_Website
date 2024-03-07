'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productn extends Model {
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
  Productn.init({
    name: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(350)
    },
    stock: {
      type: DataTypes.INTEGER
    },
    state: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'Productn',
  });
  return Productn;
};