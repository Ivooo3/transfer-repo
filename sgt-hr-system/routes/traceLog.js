const express = require('express');

const traceLogController = require('../controllers/traceLog');

const router = express.Router();

// router.get('/traceLog', traceLogController.getTraceLog);

router.post('/createTraceLog', traceLogController.createTraceLog);

module.exports = router;
