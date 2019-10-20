const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const TraceLog = sequelize.define('trace_log', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    date_log_in: Sequelize.DATE,
    date_log_out: Sequelize.DATE,
    ip: Sequelize.STRING
});

module.exports = TraceLog;