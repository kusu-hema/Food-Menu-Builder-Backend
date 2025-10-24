const express = require('express');
const router = express.Router();
const controller = require('../controller/menucontroller');

// CRUD API endpoints
router.get('/', controller.getMenus);

router.get('/:id', controller.getMenuById);

router.post('/', controller.createMenu);

router.put('/:id', controller.updateMenu);

router.delete('/:id', controller.deleteMenu);

module.exports = router;
