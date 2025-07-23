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

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await model.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get a single user by ID
const getUserById = async (req, res) => {
  try {
    const user = await model.getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Create a new user
const createUser = async (req, res) => {
  try {
    const newUser = await model.createUser(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update an existing user
const updateUser = async (req, res) => {
  try {
    const updatedUser = await model.updateUser(req.params.id, req.body);
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const deleted = await model.deleteUser(req.params.id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};



