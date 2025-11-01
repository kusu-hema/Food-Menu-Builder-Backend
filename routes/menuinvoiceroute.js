const express = require('express');
const router = express.Router ( );
const controller = require ('../controller/menuinvoicecontroller');

// CRUD API endpoints

// Read all users (GET)
router.get ('/', controller.getMenuInvoice);

// Read one user by ID (GET)
router.get('/:id', controller.getMenuInvoiceById);

// Create new user (POST)
router.post('/', controller.createMenuInvoice);

// Update user (PUT)
router.put('/:id', controller.updateMenuInvoice);

// Delete user (DELETE)
router.delete('/:id', controller.deleteMenuInvoice);

module.exports = router; 

