const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const LeaveType = sequelize.define('leave_type', {
    id: {
        type: Sequelize.STRING(10),
        allowNull: false,
        primaryKey: true
    }
});

module.exports = LeaveType;