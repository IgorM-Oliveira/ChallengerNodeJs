const express = require('express');
const authMiddlewares = require('../middlewares/auth');
const router = express.Router();
const shortenerController = require('../controllers/shortener.controller');

router.use(authMiddlewares);

router.get('/shortlist', shortenerController.shortlist);

router.delete('/shortlist/:shortnessId', shortenerController.short_delete);

router.post('/short_register', shortenerController.short_register);

module.exports = router;
