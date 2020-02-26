const Sequelize = require('sequelize');
<<<<<<< HEAD
const db = require('./database')

const Clients = db.define('client',{
    id_client: {
        type: Sequelize.INTEGER,
        primeryKey:true,
        autoIncrement: true,
    },
    name: Sequelize.STRING,
    apodo: Sequelize.STRING
=======
const db = require('./database');

const Clients = db.define('client', {
  id_client: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  apodo: Sequelize.STRING,
>>>>>>> 8d162e083d7bb4cbfa49d3fe351915fcfa9eaf6d
});

module.exports = Clients;
