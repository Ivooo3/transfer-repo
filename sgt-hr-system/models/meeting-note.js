const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const MeetingNote = sequelize.define('meeting_note', {
    meeting_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
        primaryKey: true
    },
    mom: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = MeetingNote;