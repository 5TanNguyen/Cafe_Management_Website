'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Addcode extends Model {
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
    Addcode.init({
        key: {
            type: DataTypes.STRING(50)
        },
        type: {
            type: DataTypes.STRING(50)
        },
        valueEn: {
            type: DataTypes.STRING(50)
        },
        valueVi: {
            type: DataTypes.STRING(50)
        }
    }, {
        sequelize,
        modelName: 'Addcode',
    });
    return Addcode;
};