const express = require('express');
const router = express.Router();
const controller = require('../controller/menucontroller');

// CRUD API endpoints

// Read all users (GET)
router.get('/', controller.getMenus);

// get api by id 
router.get('/:id', controller.getMenuById);

// post api 
router.post('/', controller.createMenu);

// update api by id 
router.put('/:id', controller.updateMenu);

// delete api 
router.delete('/:id', controller.deleteMenu);

module.exports = router;
