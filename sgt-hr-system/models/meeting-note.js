const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const MeetingNote = sequelize.define('meeting_note', {
    id: {//foreign key
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    room_id: Sequelize.INTEGER,//Foreign key
    date: {
        type: Sequelize.DATE,
        allowNull: false,
        primaryKey: true
    },
    mom: Sequelize.STRING
});

module.exports = MeetingNote;