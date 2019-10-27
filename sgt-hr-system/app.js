const Doc = require('./models/doc');
const Employee = require('./models/employee');
const LeaveStatus = require('./models/leave-status');
const LeaveType = require('./models/leave-type');
const MeetingNote = require('./models/meeting-note');
const Meeting = require('./models/meeting');
const News = require('./models/news');
const Room = require('./models/room');
const SkillEmployee = require('./models/skill-employee');
const Skill = require('./models/skill');
const TimeOffHistory = require('./models/time-off-history');
const TimeOff = require('./models/time-off');
const TraceLog = require('./models/trace-log');
const UserHistory = require('./models/user-history');
const User = require('./models/user');
const Participant = require('./models/participant');

//TraceLog
TraceLog.belongsTo(User, {
    foreignKey: 'user_id',
    sourceKey: 'id'
});

//Time Off
TimeOff.belongsTo(LeaveType, {
    foreignKey: 'leave_type_cd',
    sourceKey: 'id'
});
TimeOff.belongsTo(LeaveStatus, {
    foreignKey: 'leave_status_cd',
    sourceKey: 'cd'
});
TimeOff.belongsTo(Doc, {
    foreignKey: 'doc_id',
    sourceKey: 'id'
});
TimeOff.belongsTo(Employee, {
    foreignKey: 'user_id',
    sourceKey: 'id'
});
TimeOff.belongsTo(Employee, {
    foreignKey: 'c_who',
    sourceKey: 'id'
});

//Time Off H
TimeOffHistory.belongsTo(TimeOff, {
    foreignKey: 'id',
    sourceKey: 'id'
});
TimeOffHistory.belongsTo(LeaveType, {
    foreignKey: 'leave_type_cd',
    sourceKey: 'id'
});
TimeOffHistory.belongsTo(LeaveStatus, {
    foreignKey: 'leave_status_cd',
    sourceKey: 'cd'
});
TimeOffHistory.belongsTo(Doc, {
    foreignKey: 'doc_id',
    sourceKey: 'id'
});
TimeOffHistory.belongsTo(Employee, {
    foreignKey: 'c_who',
    sourceKey: 'id'
});

//News
News.belongsTo(Doc, {
    foreignKey: 'doc_id',
    sourceKey: 'id'
});
News.belongsTo(Employee, {
    foreignKey: 'user_id',
    sourceKey: 'id'
});

//Employeee
Employee.belongsTo(Doc, {
    foreignKey: 'doc_id',
    sourceKey: 'id'
});
Employee.belongsTo(User, {
    foreignKey: 'id',
    sourceKey: 'id'
});

//User
User.belongsTo(User, {
    foreignKey: 'c_who',
    sourceKey: 'id'
});

//UserHistory
UserHistory.belongsTo(User, {
    foreignKey: 'id',
    sourceKey: 'id'
});
UserHistory.belongsTo(User, {
    foreignKey: 'c_who',
    sourceKey: 'id'
});

//Meeting
Meeting.belongsTo(Room, {
    foreignKey: 'room_id',
    sourceKey: 'id'
});
Meeting.belongsTo(User, {
    foreignKey: 'user_id',
    sourceKey: 'id'
});

Skill.belongsToMany(Employee, { through: 'skill_emp', foreignKey: 'skill_id' });
Employee.belongsToMany(Skill, { through: 'skill_emp', foreignKey: 'emp_id' });

Meeting.belongsToMany(Employee, { through: 'participant', foreignKey: 'meeting_id' });
Employee.belongsToMany(Meeting, { through: 'participant', foreignKey: 'user_id' });

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const app = express();

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const skillRoutes = require('./routes/skill');
const traceLogRoutes = require('./routes/traceLog');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(userRoutes);
app.use(skillRoutes);
app.use(traceLogRoutes);

sequelize
    .sync()
    .then(result => {
        app.listen(3001);
    })
    .catch(err => {
        console.log(err);
    });

