const express = require('express');

const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/register', userController.userRegistration);

router.post('/authenticate', userController.userAuthenticate);

module.exports = router;
