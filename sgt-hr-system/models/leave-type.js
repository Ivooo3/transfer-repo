const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const LeaveType = sequelize.define('leave_type', {
    cd: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    }
});

module.exports = LeaveType;