const express = require('express');
const router = express.Router();

const authMiddlewares = require('../middlewares/auth');
const shortenerController = require('../controllers/shortener.controller');

router.use(authMiddlewares);

router.get('/shortlist/links', shortenerController.shortlist);

router.get('/shortlist/:shortnessId', shortenerController.short_single);

router.put('/short_update/:shortnessId', shortenerController.short_update);

router.delete('/shortlist/:shortnessId', shortenerController.short_delete);

router.post('/short_register', shortenerController.short_register);

module.exports = router;
