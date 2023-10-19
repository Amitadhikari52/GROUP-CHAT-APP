const sequelize = require("../util/db");
const Sequelize = require("sequelize");

const Chat = sequelize.define("chats", {
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
  groupId: {
    type: Sequelize.INTEGER,
    allowNull: true, 
},
});

module.exports = Chat;