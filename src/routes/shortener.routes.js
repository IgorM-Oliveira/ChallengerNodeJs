const express = require('express');
const router = express.Router();
const shortenerController = require('../controllers/shortener.controller');

router.get('/shortlist/all', shortenerController.shortlist_all);

router.get('/:code', shortenerController.short_redirect);

module.exports = router;
