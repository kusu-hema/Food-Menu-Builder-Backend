const express = require('express');
const router = express.Router();
const { createMenuInvoice } = require('../controller/menupdfinvoicecontroller');

router.post('/menuinvoice', createMenuInvoice);

module.exports = router;
