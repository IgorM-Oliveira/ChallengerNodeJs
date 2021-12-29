const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
  res.status(200).send({
    success: true,
    message: 'Seja bem-vindo a API',
  });
});

module.exports = router;
