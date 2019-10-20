const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    salt: {
        type: Sequelize.STRING,
        allowNull: false
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
        allowNull: false
    },
    c_who: Sequelize.INTEGER
});

module.exports = User;