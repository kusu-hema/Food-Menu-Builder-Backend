const express = require('express');
const router = express.Router();
const controller = require('../controller/menuinvoicecontroller');

// CRUD APIs
router.get('/', controller.getInvoices);


router.get('/:id', controller.getInvoiceById);


router.post('/', controller.createInvoice);


router.put('/:id', controller.updateInvoice);


router.delete('/:id', controller.deleteInvoice);



module.exports = router;
