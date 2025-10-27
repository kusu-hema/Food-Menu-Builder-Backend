const express = require ('express');
const router = express.Router();
const controller = require ('../controller/menuitemscontroller');

// CURD API ENDPOINTS

// Read all users (GET)
router.get('/', controller.getMenuItems);

// get api by id 
router.get('/:id', controller.getMenuItemsById);

// post api 
router.post('/', controller.createMenuItems);

// update api by id 
router.put('/:id', controller.updateMenuItems); 

// delete api 
router.delete('/:id', controller.deleteMenuItem); 

module.exports = router;
