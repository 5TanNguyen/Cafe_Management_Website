'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
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
    Booking.init({
        statusId: {
            type: DataTypes.STRING(50)
        },
        doctorId: {
            type: DataTypes.INTEGER
        },
        patientId: {
            type: DataTypes.INTEGER
        },
        date: {
            type: DataTypes.DATE
        },
        timeType: {
            type: DataTypes.STRING(100)
        }
    }, {
        sequelize,
        modelName: 'Booking',
    });
    return Booking;
};