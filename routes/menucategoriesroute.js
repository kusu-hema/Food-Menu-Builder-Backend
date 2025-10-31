const express = require ('express');
const router = express.Router();
const controller = require ('../controller/menucategoriescontroller');


//CURD API endpoints

// Read all users (GET)
router .get ('/', controller.getMenuCatergories);

// Read one user by ID 
router.get(':id', controller.getMenuCategoriesById); 

// create new user (POST)
router.post ('/', controller.createMenuCategories); 

// Update user (PUT)
router.put ('/:id', controller.updateMenuCategories); 

// Delete user (DELETE)
router.delete('/:id', controller.deleteMenuCategories); 

module.exports = router;
