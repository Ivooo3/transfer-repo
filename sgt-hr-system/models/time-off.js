const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const LeaveStatus = require('./leave-status');

const TimeOff = sequelize.define('time_off', {
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
    leave_type_cd: {
        type: Sequelize.STRING(10),
        allowNull: false,
    },
    leave_status_cd: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    doc_id: Sequelize.INTEGER,
    date_from: {
        type: Sequelize.DATE,
        allowNull: false
    },
    date_to: {
        type: Sequelize.DATE,
        allowNull: false
    },
    half_day: {
        type: Sequelize.CHAR,
        allowNull: false
    },
    note: Sequelize.STRING,
    c_when: {
        type: Sequelize.DATE,
        allowNull: false
    },
    c_who: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = TimeOff;