'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
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
  Category.init({
    code: {
      type: DataTypes.STRING(20),
      allowNull: false
    },    
    name: {
      type: DataTypes.STRING(90),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(350)
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};