const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Participant = sequelize.define('participant', {
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
});

module.exports = Participant; 