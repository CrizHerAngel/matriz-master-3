const Sequelize = require('sequelize');
const db = require('./database');

const Users = db.define('users', {
  Id_user: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'No  se permite campo vacío',
      },
    },
  },
  lastname: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'No  se permite campo vacío',
      },
    },
  },
  alias: {
    type: Sequelize.STRING(30),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'No se permite dejar campo vacio',
      },
      isUppercase: {
        msg: 'Solo se permiten MAYUSCÚLAS',
      },
    },
    unique: {
      args: true,
      msg: 'Usuario con Alias ya registrado',
    },
  },
  wiw: {
    type: Sequelize.STRING(20),
    allowNull: false,
    validate: {
      isAlpha: {
        msg: 'Solo se permite letras',
      },
      notEmpty: {
        msg: 'No se permite dejar campo vacio',
      },
      isLowercase: {
        msg: 'Solo se permiten minúsculas',
      },
    },
    unique: {
      args: true,
      msg: 'Usuario con WiW ya registrado',
    },
  },
  role: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
});

/* Users.belongsTo(Role); */

module.exports = Users;
