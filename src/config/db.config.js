const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  local: {
    localUrlDatabase: process.env.DB_URI_LOCAL,
    secret: 'password',
  },
  web: {
    localUrlDatabase: process.env.DB_URI_WEB,
    secret: 'password',
  },
};