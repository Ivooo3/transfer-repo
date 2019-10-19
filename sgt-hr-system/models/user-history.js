const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const UserHistory = sequelize.define('use_history', {
    id: { //foreign key
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    password: Sequelize.INTEGER,
    mail: Sequelize.STRING,
    role: Sequelize.STRING,
    password_change_code: Sequelize.STRING,
    //when
    //who
});

module.exports = UserHistory;