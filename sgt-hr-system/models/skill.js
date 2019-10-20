const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Skill = sequelize.define('skill', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    skill_name: Sequelize.STRING(50)
});

module.exports = Skill;