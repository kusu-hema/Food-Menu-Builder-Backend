const express = require('express');
const router = express.Router();
const controller = require('../controller/menucontextcontroller');


// CRUD APIs

// get all
router.get('/', controller.getContexts);

//  get by id 
router.get('/:id', controller.getContextById);

//  Create
router.post('/', controller.createContext);

// Update
router.put('/:id', controller.updateContext);

// delete
router.delete('/:id', controller.deleteContext);



module.exports = router;
