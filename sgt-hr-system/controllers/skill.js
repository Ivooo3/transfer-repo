const Skill = require('../models/skill');

exports.addSkill = (req, res, next) => {
    const skillName = req.body.skillName;

    Skill
        .create({ skill_name: skillName })
        .catch(err => console.log(err));
};