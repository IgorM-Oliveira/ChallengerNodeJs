const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

const database = require('./config/db.config');

mongoose.Promise = global.Promise;

mongoose.connect(database.local.localDatabaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Sucesso na Coneção');
}).catch((err) => {
  console.log('Falha na Coneção ', { err });
});

const index = require('./routes/index');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());
app.use(morgan('dev'));

app.use(index);

module.exports = app;
