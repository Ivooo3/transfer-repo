const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const TimeOffHistory = sequelize.define('time_off_history', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    leave_type_cd: {
        type: Sequelize.STRING(10),
        allowNull: false
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
        allowNull: false,
        primaryKey: true
    },
    c_who: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = TimeOffHistory;

