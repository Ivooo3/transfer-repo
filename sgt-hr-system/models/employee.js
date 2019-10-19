const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Employee = sequelize.define('employee', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  start_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  end_date: {
    type: Sequelize.DATE,
    allowNull: true
  },
  position: Sequelize.STRING,

  url_portfolio: Sequelize.STRING,
  //todo doc foreign key
});

module.exports = Employee;
