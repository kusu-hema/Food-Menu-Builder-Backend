const { Pool } = require('pg');   
const dotenv = require('dotenv');

const pool = new Pool({ //  Instantiate using Pool
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '9848698',
  port: 5432,  
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

 