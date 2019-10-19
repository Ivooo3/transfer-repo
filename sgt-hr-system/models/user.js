const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userName: Sequelize.STRING,
    salt: Sequelize.STRING,
    password: Sequelize.STRING,
    mail: Sequelize.STRING,
    role: Sequelize.STRING,
    password_change_code: Sequelize.STRING,
    when: Sequelize.DATE,
    //who need to be foreign key
    who: Sequelize.INTEGER,
});

module.exports = User;