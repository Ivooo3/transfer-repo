const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Meeting = sequelize.define('meeting', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    room_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    subject: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: true
    },
    duration: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Meeting;