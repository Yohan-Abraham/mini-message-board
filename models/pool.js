const { Pool } = require('pg');
require('dotenv').config();

module.exports = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  name: process.env.NAME,
  port: process.env.PORT,
});
