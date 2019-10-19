const Employee = require('./models/employee');
const Doc = require('./models/doc');
const Room = require('./models/room');
const Skill = require('./models/skill');
const User = require('./models/user');
const Meeting = require('./models/meeting-note');
const News = require('./models/news');
//const UserHistory = require('./models/user-history');

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const app = express();

const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);

sequelize
    .sync()
    .then(result => {
        console.log(result);
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });

