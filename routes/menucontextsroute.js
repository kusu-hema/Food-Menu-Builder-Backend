const express = require('express');
const router = express.Router();
const controller = require ('../controller/menucontextcontroller');

// Read all users (GET)
router.get('/', controller.getMenuContext);

// Read one user by ID (GET)
router.get('/:id', controller.getMenuContextById);

// Create new user (POST)
router.post('/', controller.updateMenuContext);

// Update user (PUT)
router.put('/:id', controller.updateMenuContextById);

// Delete user (DELETE)
router.delete ('/:id', controller.deleteMenuContext);

module.exports = router;