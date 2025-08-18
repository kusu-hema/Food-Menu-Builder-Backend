const { Pool } = require('pg');  // Capital P, correct import
const dotenv = require('dotenv'); // optional if you’re using .env

// You can call dotenv.config() here if using .env
// dotenv.config();

const pool = new Pool({ //  Instantiate using Pool
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '9848698',
  port: 5432, // use your correct port
});

module.exports = pool; //  Export the pool object




// const {pool}= require('pg');
// const dotenv = require('dotenv')

// const pool = new pool({
//     user:'postgres',
//     host:'localhost',
//     database:'postgres',
//     password:'984869',
//     port:5433,
// });
// module.exports = pool;

 