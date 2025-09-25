const express = require('express');
const router = express.Router();
const controller = require('../controller/menuproductcontroller');

// CRUD APIs
router.get('/', controller.getProducts);

// get product by id 
router.get('/:id', controller.getProductById);

// Post api 
router.post('/', controller.createProduct);

// update api
router.put('/:id', controller.updateProduct);

// delete api
router.delete('/:id', controller.deleteProduct);


module.exports = router;
