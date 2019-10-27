const User = require('../models/user');

exports.createUser = (req, res, next) => {
    const userName = req.body.userName;
    const salt = req.body.salt;
    const password = req.body.password;
    const e_mail = req.body.email;
    const user_role = req.body.userRole;
    const password_change_code = req.body.password_change_code;
    const c_when = new Date();
    const c_who = req.body.c_who;

    User
        .create({
            userName: userName,
            salt: 'salt',
            password: password,
            e_mail: e_mail,
            user_role: user_role,
            password_change_codeL: password_change_code,
            c_when: c_when,
            c_who: c_who
        })
        .catch(err => console.log(err));
};

exports.getUser = (req, res, next) => {
    const id = req.body.id;

    User.findByPk(id).then(result => {
        console.log(result);
        next();
    }).catch(err => {
        console.log(err);
    });

};