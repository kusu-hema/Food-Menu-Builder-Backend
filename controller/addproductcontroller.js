// File: controllers/categoryController.js

const model = require('../models/addproductmodel');

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
    const { product, category, action } = req.body;
    const imagePath = req.file ? req.file.path : null;

    if (!product || !category) {
      return res.status(400).json({ message: 'Product and Category are required.' });
    }

    const newCategory = await model.createCategory({
      image: imagePath,
      product,
      category,
      action
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
    const { product, category, action } = req.body;
    const imagePath = req.file ? req.file.path : null;

    const updatedCategory = await model.updateCategory(req.params.id, {
      image: imagePath,
      product,
      category,
      action
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

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};