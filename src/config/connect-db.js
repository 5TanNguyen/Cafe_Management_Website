const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("node_cafe", "root", "Redtoso5", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

const connectionDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connectionDatabase();

module.exports = sequelize;
