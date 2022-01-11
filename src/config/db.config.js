const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  connect: {
    localUrlDatabase: process.env.DB_URI,
    secret: 'password',
  }
};