'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Doctor_Clinic_Specialty extends Model {
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
    Doctor_Clinic_Specialty.init({
        doctorId: {
            type: DataTypes.INTEGER
        },
        clinicId: {
            type: DataTypes.INTEGER
        },
        specialtyId: {
            type: DataTypes.INTEGER
        }
    }, {
        sequelize,
        modelName: 'Doctor_Clinic_Specialty',
    });
    return Doctor_Clinic_Specialty;
};