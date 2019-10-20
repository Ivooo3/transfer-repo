const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const SkillEmployee = sequelize.define('skill_emp', {
    skill_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    emp_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    grade: Sequelize.INTEGER(2)
});

module.exports = SkillEmployee;