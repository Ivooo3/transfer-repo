const Sequelize = require('sequelize');

const sequelize = new Sequelize('sgt_hr', 'root', 'admin', {
  dialect: 'mysql',
  host: 'localhost',
  define: {
    timestamps: false
  }
});

module.exports = sequelize;
