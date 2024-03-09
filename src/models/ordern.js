'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Ordern extends Model{
        // 
        // 
        // 
        static associate(models){
            // define association here
        }
    }
    Ordern.init({
        totalPrice: DataTypes.FLOAT,
        date: DataTypes.DATE,
        address: DataTypes.STRING,
        state: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Ordern',
    });
    return Ordern;
}