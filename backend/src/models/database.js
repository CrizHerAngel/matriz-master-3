const Sequelize = require('sequelize');

const sequelize = new Sequelize('matrix_escalation', 'sa', '2012/halo3', {
  host: '127.0.0.1',
  port: '1433',
  dialect: 'mssql',
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;
