const express = require('express');

const router = express.Router();
const shortenerController = require('../controllers/shortener.controller');

router.post('/shortener', shortenerController.shortener);

/*
router.post('/shortener', function(req, res) {
    res.status(200).send({
        success: true,
        message: req.body.url,
    });
});
*/

module.exports = router;
