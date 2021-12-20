const express = require('express');

const router = express.Router();
const auth = require('../middlewares/auth');
const userController = require('../controllers/user.controller');

router.post('/user', userController.userLogin);

router.post('/user_register', userController.userRegistration);

router.get('/user_profile', auth, userController.userReturn);

module.exports = router;
