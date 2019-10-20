const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Document = sequelize.define('doc', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    doc_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    doc_type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    doc_url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: Sequelize.DATE
});

module.exports = Document;