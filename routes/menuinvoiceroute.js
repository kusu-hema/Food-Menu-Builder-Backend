const express = require('express');
const router = express.Router ( );
const controller = require ('../controller/menuinvoicecontroller');

// CRUD API endpoints

// Read all users (GET)
router.get ('/', controller.getMenuInvoice);

// Read one user by ID (GET)
router.get('./Id', controller.getMenuInvoiceById);

// Create new user (POST)
router.post('./', controller.createMenuInvoice);

// Update user (PUT)
router.put('./Id', controller.updateMenuInvoice);

// Delete user (DELETE)
router.delete('./Id', controller.deleteMenuInvoice);

module.exports = router; 

