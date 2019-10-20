const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const News = sequelize.define('news', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    doc_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    news_comments: Sequelize.STRING(500)
});

module.exports = News;