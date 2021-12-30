const express = require('express');
const authMiddlewares = require('../middlewares/auth');
const router = express.Router();
const shortenerController = require('../controllers/shortener.controller');

// router.use(authMiddlewares);

router.get('/shortlist', authMiddlewares, shortenerController.shortlist);

router.get('/shortlist_all', shortenerController.shortlist_all);

router.get('/shortlist/:shortnessId', authMiddlewares, shortenerController.short_single);

router.get('/:code', shortenerController.short_redirect);

router.put('/short_update/:shortnessId', authMiddlewares, shortenerController.short_update);

router.delete('/shortlist/:shortnessId', authMiddlewares, shortenerController.short_delete);

router.post('/short_register', shortenerController.short_register);

module.exports = router;
