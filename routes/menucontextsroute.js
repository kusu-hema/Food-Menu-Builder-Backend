const express = require('express');
const router = express.Router();
const controller = require ('../controller/menucontextcontroller');

router.get('/', controller.getMenuContext);

router.get('/:id', controller.getMenuContextById);

router.post('/', controller.updateMenuContext);

router.put('/:id', controller.updateMenuContextById);

router.delete ('/:id', controller.deleteMenuContext);

module.exports = router;



// const express = require('express');
// const router = express.Router();
// const controller = require('../controller/menucontroller');

// // CRUD API endpoints
// router.get('/', controller.getMenus);

// router.get('/:id', controller.getMenuById);

// router.post('/', controller.createMenu);

// router.put('/:id', controller.updateMenu);

// router.delete('/:id', controller.deleteMenu);

// module.exports = router;