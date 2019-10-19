const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Document = sequelize.define('doc', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    type: Sequelize.STRING,
    url: Sequelize.STRING,
    date: Sequelize.DATE
});

module.exports = Document;