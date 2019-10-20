const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const LeaveStatus = sequelize.define('leave_status', {
    cd: {
        type: Sequelize.STRING(10),
        allowNull: false,
        primaryKey: true
    }
});

module.exports = LeaveStatus;