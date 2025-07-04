// const model = require('../models/authmodel');

// const signup = async (req, res) => {
//     const user = req.body;
//     try {
//         const result = await model.create(user); // or your DB logic
//         res.status(200).json({ message: 'User registered', data: result });
//     } catch (err) {
//         console.error('Signup error:', err);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

// module.exports = {
//     signup // ✅ This must match what you use in your route
// };



const model = require('../models/authmodel');

const getUsers = async (req, res) => {
  try {
    const users = await model.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getUsers
};


