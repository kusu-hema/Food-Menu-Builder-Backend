const express = require ('express');
const router = express.Router();
const controller = require ('../controller/menuitemscontroller');

// CURD API ENDPOINTS

// Read all users (GET)
router.get('/', controller.getMenuItems);

// Read one user by ID (GET)
router.get('/:id', controller.getMenuItemsById);

// Create new user (POST)
router.post('/', controller.createMenuItems);

// Update user (PUT)
router.put('/:id', controller.updateMenuItems); 

// Delete user (DELETE)
router.delete('/:id', controller.deleteMenuItem); 

module.exports = router;
