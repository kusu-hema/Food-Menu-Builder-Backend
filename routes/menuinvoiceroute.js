const express = require('express');
const router = express.Router ( );
const controller = require ('../controller/menuinvoicecontroller');


router.get ('/', controller.getMenuInvoice);
router.get('./Id', controller.getMenuInvoiceById);
router.post('./', controller.createMenuInvoice);
router.put('./Id', controller.updateMenuInvoice);
router.delete('./Id', controller.deleteMenuInvoice);

module.exports = router; 

