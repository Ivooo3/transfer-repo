const TraceLog = require('../models/trace-log');

exports.createTraceLog = (req, res, next) => {
    const userId = req.body.userId;
    const logIn = req.body.logIn;
    const logOut = req.body.logOut;
    const ip = req.body.ip;

    TraceLog
        .create({
            user_id: userId,
            dt_log_in: logIn,
            dt_log_out: logOut,
            ip: ip
        }).then(next())
        .catch(err => console.log(err));
};
