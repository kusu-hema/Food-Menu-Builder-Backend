const express = require('express');
const router = express.Router();
const controller = require('../controller/addproductcontroller');
const multer = require('multer');

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the directory where uploaded files will be stored
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Generate a unique filename to avoid overwriting files
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Create a new product (POST) - now handles file upload
router.post('/', upload.single('image'), controller.createProduct);

// Add the upload middleware to the PUT route to handle image uploads
router.put('/:id', upload.single('image'), controller.updateProduct);

// New route for bulk product import from Excel
router.post('/bulk-import', controller.bulkImportProducts);

// All other routes remain the same
router.get('/', controller.getProducts);
router.get('/:id', controller.getProductById);
router.delete('/:id', controller.deleteProduct);

module.exports = router;