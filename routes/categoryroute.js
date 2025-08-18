const express = require('express');
const router = express.Router();
const controller = require('../controller/categoryController');
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

// Create a new category (POST) - now handles file upload
// The 'upload.single('image')' middleware processes the file named 'image'
router.post('/', upload.single('image'), controller.createCategory);

// All other routes remain the same
router.get('/', controller.getCategories);
router.get('/:id', controller.getCategoryById);
router.put('/:id', controller.updateCategory);
router.delete('/:id', controller.deleteCategory);

module.exports = router;