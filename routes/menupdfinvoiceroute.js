const express = require('express');
const router = express.Router();
const { createMenuInvoice } = require('../controllers/menuInvoiceController');

router.post('/menuinvoice', createMenuInvoice);

module.exports = router;
