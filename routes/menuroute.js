const express = require('express');
const router = express.Router();
const controller = require('../controller/menucontroller');

// CRUD API endpoints

// Read all menus (GET /api/menus)
router.get('/', controller.getMenus);

// NEW: Read full menu/invoice details by ID (GET /api/menus/details/:id)
// The :id here is what gets captured by req.params.id in the controller
router.get('/details/:id', controller.getFullMenuDetails); 

// Read one menu by ID (GET /api/menus/:id)
router.get('/:id', controller.getMenuById);

// Create new menu (POST)
router.post('/', controller.createMenu);

// Update menu (PUT)
router.put('/:id', controller.updateMenu);

// Delete menu (DELETE)
router.delete('/:id', controller.deleteMenu);

module.exports = router;