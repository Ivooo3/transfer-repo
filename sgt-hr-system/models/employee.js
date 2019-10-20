const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Employee = sequelize.define('employee', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  start_date: Sequelize.DATE,
  end_date: Sequelize.DATE,
  position: Sequelize.STRING,
  url_portfolio: Sequelize.STRING
});

module.exports = Employee;
