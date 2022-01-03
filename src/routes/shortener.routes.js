const express = require('express');
const authMiddlewares = require('../middlewares/auth');
const router = express.Router();
const shortenerController = require('../controllers/shortener.controller');

// router.use(authMiddlewares);

router.get('/shortlist', shortenerController.shortlist).use(authMiddlewares);

router.get('/shortlist_all', shortenerController.shortlist_all);

router.get('/shortlist/:shortnessId', shortenerController.short_single).use(authMiddlewares);

router.get('/:code', shortenerController.short_redirect);

router.put('/short_update/:shortnessId', shortenerController.short_update).use(authMiddlewares);

router.delete('/shortlist/:shortnessId', shortenerController.short_delete).use(authMiddlewares);

router.post('/short_register', shortenerController.short_register);

module.exports = router;
