const express = require ('express');
const router = express.Router();
const controller = require ('../controller/menucategoriescontroller');


//CURD API endpoints

// Read all users (GET)
router .get ('/', controller.getMenus);

// Read one user by ID 
router.get(':id', controller.getMenuById);

// create new user (POST)
router.post ('/', controller.createMenu);

// Update user (PUT)
router.put ('/:id', controller.updateMenu);

// Delete user (DELETE)
router.delete('/:id', controller.deleteMenu);

module.exports = router;
