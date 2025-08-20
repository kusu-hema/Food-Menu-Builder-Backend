// File: controllers/productController.js

const model = require('../models/addproductmodel');

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await model.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get a single product by ID
const getProductById = async (req, res) => {
  try {
    const product = await model.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
    console.error('Error fetching product:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { product, category, action } = req.body;
    const imagePath = req.file ? req.file.path : null;

    if (!product || !category) {
      return res.status(400).json({ message: 'Product and Category are required.' });
    }

    const newProduct = await model.createProduct({
      image: imagePath,
      product,
      category,
      action
    });

    res.status(201).json(newProduct);
  } catch (err) {
    console.error('Error creating product:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update an existing product
const updateProduct = async (req, res) => {
  try {
    const { product, category, action } = req.body;
    const imagePath = req.file ? req.file.path : null;

    const updatedProduct = await model.updateProduct(req.params.id, {
      image: imagePath,
      product,
      category,
      action
    });
    
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(updatedProduct);
  } catch (err) {
    console.error('Error updating product:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    await model.deleteProduct(req.params.id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
