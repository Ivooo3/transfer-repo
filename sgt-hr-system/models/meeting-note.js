const Sequelize = require('sequelize');

const sequelize = require('../util/database');
const Participant = require('../models/participant');

const MeetingNote = sequelize.define('meeting_note', {
    meeting_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: Participant,
            key: 'meeting_id'
        }
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        //One way to define reference
        references: {
            model: Participant,
            key: 'user_id'
        }
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