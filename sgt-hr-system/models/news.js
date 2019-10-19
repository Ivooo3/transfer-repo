const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const News = sequelize.define('news', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_id: Sequelize.INTEGER, //foreign key
    doc_id: Sequelize.INTEGER, //foreign key
    title: Sequelize.STRING,
    date: Sequelize.DATE,
    comments: Sequelize.STRING
});

module.exports = News;