const express = require('express');

const skillController = require('../controllers/skill');

const router = express.Router();

router.post('/addSkill', skillController.addSkill);

module.exports = router;
