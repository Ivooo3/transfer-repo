const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const TimeOff = sequelize.define('time_off', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_id: Sequelize.INTEGER, //Foreign key
    leave_type_cd: Sequelize.STRING, //Foreign key
    leave_status_cd: Sequelize.STRING, //Foreign key
    doc_id: Sequelize.INTEGER, //Foreign key
    date_from: Sequelize.DATE,
    date_to: Sequelize.DATE,
    half_day: Sequelize.CHAR,
    note: Sequelize.STRING,
    //who
    //when
});

module.exports = TimeOff;