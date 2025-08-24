// File: routes/addcategoryroute.js

const express = require('express');
const router = express.Router();
const controller = require('../controller/addcategorycontroller');
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

// All API routes for categories
// Note: The bulk-import route does not use the multer middleware as it handles JSON data, not files.

// Create a new category (POST) - handles image upload
router.post('/', upload.single('image'), controller.createCategory);

// Update an existing category (PUT) - handles image upload
router.put('/:id', upload.single('image'), controller.updateCategory);

// New route for bulk import of categories (POST) - handles JSON data
router.post('/bulk-import', controller.bulkImportCategories);

// Retrieve all categories (GET)
router.get('/', controller.getCategories);

// Retrieve a single category by ID (GET)
router.get('/:id', controller.getCategoryById);

// Delete a category by ID (DELETE)
router.delete('/:id', controller.deleteCategory);

module.exports = router;