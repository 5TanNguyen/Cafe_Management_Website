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

db.role = require("./role")(sequelize, Sequelize.DataTypes);
db.role_permission = require("./role_permission")(
  sequelize,
  Sequelize.DataTypes
);
db.permission = require("./permission")(sequelize, Sequelize.DataTypes);
db.post = require("./post")(sequelize, Sequelize.DataTypes);
db.category = require("./category")(sequelize, Sequelize.DataTypes);
db.productn = require("./productn")(sequelize, Sequelize.DataTypes);
db.cart = require("./cart")(sequelize, Sequelize.DataTypes);
db.ordern = require("./ordern")(sequelize, Sequelize.DataTypes);
db.orderDetail = require("./orderDetail")(sequelize, Sequelize.DataTypes);
db.productPrice = require("./productPrice")(sequelize, Sequelize.DataTypes);
db.user = require("./user")(sequelize, Sequelize.DataTypes);
db.user_role = require("./user_role")(sequelize, Sequelize.DataTypes);
db.customer = require("./customer")(sequelize, Sequelize.DataTypes);
db.customerType = require("./customerType")(sequelize, Sequelize.DataTypes);
db.notification = require("./notification")(sequelize, Sequelize.DataTypes);

// db.sequelize.sync({ force: false, alter: false }).then(() => {
//   console.log("yes re-sync done!");
// });

// Relation dùng cho các hàm hỗ trợ của Sequelize
db.category.hasMany(db.productn, {
  foreignKey: "category_id",
  as: "productn",
});
db.productn.belongsTo(db.category, {
  foreignKey: "category_id",
  as: "category",
});

db.customer.hasOne(db.cart, {
  foreignKey: "customer_id",
  as: "cart",
});
db.cart.belongsTo(db.customer, {
  foreignKey: "customer_id",
  as: "customer",
});

db.productn.hasMany(db.cart, {
  foreignKey: "productn_id",
  as: "cart",
});
db.cart.belongsTo(db.productn, {
  foreignKey: "productn_id",
  as: "productn",
});

db.customer.hasMany(db.ordern, {
  foreignKey: "customer_id",
  as: "ordern",
});
db.ordern.belongsTo(db.customer, {
  foreignKey: "customer_id",
  as: "customer",
});

db.ordern.hasMany(db.orderDetail, {
  foreignKey: "ordern_id",
  as: "orderDetail",
});
db.orderDetail.belongsTo(db.ordern, {
  foreignKey: "ordern_id",
  as: "ordern",
});

db.productn.hasMany(db.orderDetail, {
  foreignKey: "productn_id",
  as: "orderDetail",
});
db.orderDetail.belongsTo(db.productn, {
  foreignKey: "productn_id",
  as: "productn",
});

db.productn.hasMany(db.productPrice, {
  foreignKey: "productn_id",
  as: "productPrice",
});
db.productPrice.belongsTo(db.productn, {
  foreignKey: "productn_id",
  as: "productn",
});

// Khúc này bắt đầu sử dụng, khúc trên cần coi lại

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

db.user.hasMany(db.notification, {
  foreignKey: "id",
  as: "notification",
});

db.notification.belongsTo(db.user, {
  foreignKey: "created_user_id",
  as: "user",
});

module.exports = db;
