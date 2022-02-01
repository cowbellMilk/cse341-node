const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'cowbell0MILK', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
