const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const UserHistory = sequelize.define('user_history', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    e_mail: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_role: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password_change_code: Sequelize.STRING,
    c_when: {
        type: Sequelize.DATE,
        allowNull: false,
        primaryKey: true
    },
    c_who: Sequelize.INTEGER
});

module.exports = UserHistory;