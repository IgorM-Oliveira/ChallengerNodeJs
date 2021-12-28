const express = require('express');

const router = express.Router();
const shortenerController = require('../controllers/shortener.controller');

router.get('/shortness', shortenerController.shortness);

router.post('/shortener', shortenerController.shortener);

module.exports = router;
