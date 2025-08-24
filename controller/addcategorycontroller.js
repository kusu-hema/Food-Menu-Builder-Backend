// File: controllers/addcategorycontroller.js

const model = require('../models/addcategorymodel');
// const db = require('../db');  

// Get all categories
const getCategories = async (req, res) => {
  try {
    const categories = await model.getAllCategories();
    res.status(200).json(categories);
  } catch (err) {
    console.error('Error fetching categories:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


// Get a single category by ID
const getCategoryById = async (req, res) => {
  try {
    const category = await model.getCategoryById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (err) {
    console.error('Error fetching category:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


// Create a new category
const createCategory = async (req, res) => {
  try {
    const { category_name } = req.body;
    const imagePath = req.file ? req.file.path : null;


    if (!category_name) {
      return res.status(400).json({ message: 'Category name is required.' });
    }


    const newCategory = await model.createCategory({
      image: imagePath,
      category_name
    });


    res.status(201).json(newCategory);
  } catch (err) {
    console.error('Error creating category:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


// Update an existing category
const updateCategory = async (req, res) => {
  try {
    const { category_name } = req.body;
    const imagePath = req.file ? req.file.path : null;


    const updatedCategory = await model.updateCategory(req.params.id, {
      image: imagePath,
      category_name
    });
   
    if (!updatedCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(updatedCategory);
  } catch (err) {
    console.error('Error updating category:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


// Delete a category
const deleteCategory = async (req, res) => {
  try {
    await model.deleteCategory(req.params.id);
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (err) {
    console.error('Error deleting category:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// New function to handle bulk import of categories
const bulkImportCategories = (req, res) => {
    const categories = req.body;

    if (!Array.isArray(categories) || categories.length === 0) {
        return res.status(400).json({ message: 'Invalid data format. Expected an array of categories.' });
    }

    // You need to map the keys from your Excel sheet to your database columns
    const values = categories.map(cat => [
        cat['S.No'],
        cat['Category Name'],
        // You might need to handle the image URL from the Excel sheet differently
        cat['Image URL']
    ]);

    const sql = `INSERT INTO categories (sno, category_name, image) VALUES ? ON DUPLICATE KEY UPDATE category_name = VALUES(category_name), image = VALUES(image)`;

    db.query(sql, [values], (err, result) => {
        if (err) {
            console.error('Error importing data:', err);
            return res.status(500).json({ message: 'Error importing data.', error: err });
        }
        res.status(200).json({ message: `${result.affectedRows} categories imported successfully.` });
    });
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
  bulkImportCategories, // Make sure to export the new function
};