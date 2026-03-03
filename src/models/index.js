"use strict";
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.userame,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require("./user")(sequelize, Sequelize.DataTypes);
db.user_role = require("./user_role")(sequelize, Sequelize.DataTypes);
db.role = require("./role")(sequelize, Sequelize.DataTypes);
db.role_permission = require("./role_permission")(
  sequelize,
  Sequelize.DataTypes
);
db.permission = require("./permission")(sequelize, Sequelize.DataTypes);

// db.sequelize.sync({ force: false, alter: false }).then(() => {
//   console.log("yes re-sync done!");
// });

// Relation dùng cho các hàm hỗ trợ của Sequelize
db.user.hasMany(db.user_role, {
  foreignKey: "user_id",
  as: "user_role",
});

db.user_role.belongsTo(db.user, {
  foreignKey: "user_id",
  as: "user",
});

db.user_role.belongsTo(db.role, {
  foreignKey: "role_id",
  as: "role",
});

db.role.hasMany(db.user_role, {
  foreignKey: "role_id",
  as: "user_role",
});

db.role.hasMany(db.role_permission, {
  foreignKey: "role_id",
  as: "role_permission",
});

db.role_permission.belongsTo(db.role, {
  foreignKey: "role_id",
  as: "role",
});

db.role_permission.belongsTo(db.permission, {
  foreignKey: "permission_id",
  as: "permission",
});

db.permission.hasMany(db.role_permission, {
  foreignKey: "permission_id",
  as: "role_permission",
});

module.exports = db;
