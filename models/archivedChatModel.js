const sequelize = require("../util/db");
const Sequelize = require("sequelize");

const ArchivedChat = sequelize.define("archivedChats", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  message: {
    type: Sequelize.STRING,
  },
});

module.exports = ArchivedChat;