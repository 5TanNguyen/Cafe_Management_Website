'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.post = require('./post')(sequelize, Sequelize.DataTypes);
db.customer = require('./customer')(sequelize, Sequelize.DataTypes);
db.role = require('./role')(sequelize, Sequelize.DataTypes);
db.category = require('./category')(sequelize, Sequelize.DataTypes);
db.productn = require('./productn')(sequelize, Sequelize.DataTypes);
db.cart = require('./cart')(sequelize, Sequelize.DataTypes);

db.sequelize.sync({ force: false})//, alter: true })
.then(()=>{
  console.log('yes re-sync done!');
})

// Relation
db.role.hasMany(db.customer, {
  foreignKey: 'role_id',
  as: 'customer'
})
db.customer.belongsTo(db.role, {
  foreignKey: 'role_id',
  as: 'role'
})

db.category.hasMany(db.productn, {
  foreignKey: 'category_id',
  as: 'productn'
})
db.productn.belongsTo(db.category, {
  foreignKey: 'category_id',
  as: 'category'
})

db.customer.hasOne(db.cart, {
  foreignKey: 'customer_id',
  as: 'cart'
})
db.cart.belongsTo(db.customer, {
  foreignKey: 'customer_id',
  as: 'customer'
})

db.productn.hasMany(db.cart, {
  foreignKey: 'productn_id',
  as: 'cart'
})
db.cart.belongsTo(db.productn, {
  foreignKey: 'productn_id',
  as: 'productn'
})


module.exports = db;
