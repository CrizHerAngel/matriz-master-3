const Sequelize = require('sequelize');
const db = require('./database');
/* IMPORTACION DE FK  roleID */
/* const Role = require('./Role'); */

const Users = db.define('users', {
  Id_user: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  lastname: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  alias: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
  wiw: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  role: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
/*   roleId: {
    type: Sequelize.INTEGER,
    references: {
      model: Role,
      key: 'id',
    },
  }, */
});

/* Users.belongsTo(Role); */

module.exports = Users;

