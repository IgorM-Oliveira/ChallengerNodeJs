const express = require('express');
// const { model, models } = require('mongoose');

const router = express.Router();

router.get('/api/default', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'Sejá bem vindo a API',
  });
});

module.exports = router;
