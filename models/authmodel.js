// // const pool = require('../config/dbconn');
// // class usermodle
// //  {
// //     async create(user)
// //     {
// //         const query = `INSERT INTO hello (name,email,password) VALUES ($1,$2,$3) RETURNING*`;
// //         const values = [name,email,password];
// //         const {rows} = await pool.query(query,values);
// //         return rows[0];  

// //     }
// // }
// // module.exports = new usermodle;


// // const pool = require('../config/dbconn');
// const pool = require('../config/dbconn');



// class usermodle {
//     // async create(user) {
//     //     const { name, email, password } = user;
//     //     const query = `INSERT INTO hello (id, name, email) VALUES ($1, $2, $3) RETURNING *`;
//     //     const values = [id, name, email];
//     //     const { rows } = await pool.query(query, values);
//     //     return rows[0];
//     // }

//     async getAllUsers() {
//         const query = `SELECT * FROM hello`;
//         const { rows } = await pool.query(query);
//         return rows; // returns an array of all users
//     }

//     // async getUserById(id) {
//     //     const query = `SELECT * FROM hello WHERE id = $1`;
//     //     const { rows } = await pool.query(query, [id]);
//     //     return rows[0]; // returns a single user
//     // }
// }

// module.exports = new usermodle();



// const pool = require('../config/dbconn');

// class usermodle {
//     async getAllUsers() {
//         const query = `SELECT * FROM hello`;
//         const { rows } = await pool.query(query);
//         console.log('📋 Data from "hello" table:', rows); // ✅ Print table data to console
//         return rows;
//     }
// }

// // Call the method immediately for testing:
// (async () => {
//     const model = new usermodle();
//     await model.getAllUsers();
// })();

// module.exports = new usermodle();


const pool = require('../config/dbconn');

class UserModel {
  async getAllUsers() {
    const query = 'SELECT * FROM hello';
    const { rows } = await pool.query(query);
    return rows;
  }
}

module.exports = new UserModel();

