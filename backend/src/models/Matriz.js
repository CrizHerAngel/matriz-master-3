const Sequelize = require('sequelize');
const db = require('./database');

const Matriz = db.define('matriz', {
  id_matrix: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  matriz_name: {
    type: Sequelize.STRING(30),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'No permite campo vacío',
      },
    },
  },
});

module.exports = Matriz;
