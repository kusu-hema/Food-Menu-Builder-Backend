const express = require('express');
const router = express.Router();
const controller = require('../controller/authcontroller');

// Read all users (GET)
router.get('/', controller.getUsers);

// Read one user by ID (GET)
router.get('/:id', controller.getUserById);

// Create new user (POST)
router.post('/', controller.createUser);

// Update user (PUT)
router.put('/:id', controller.updateUser);

// Delete user (DELETE)
router.delete('/:id', controller.deleteUser);

module.exports = router;






// const express = require('express');
// const router = express.Router();
// const controller = require('../controller/authcontroller'); //  path should be correct

// router.post('/signup', controller.signup); //  matches exported name

// module.exports = router;

