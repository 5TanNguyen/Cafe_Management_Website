'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Clinic extends Model {
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
    Clinic.init({
        name: {
            type: DataTypes.STRING(50)
        },
        address: {
            type: DataTypes.STRING(50)
        },
        description: {
            type: DataTypes.TEXT
        },
        image: {
            type: DataTypes.STRING
        }

    }, {
        sequelize,
        modelName: 'Clinic',
    });
    return Clinic;
};