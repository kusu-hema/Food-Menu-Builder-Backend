const model = require('../models/menuproductmodel');

// Get all
const getProducts = async (req, res) => {
  try {
    const data = await model.getAllProducts();
    res.json(data);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get by ID
const getProductById = async (req, res) => {
  try {
    const item = await model.getProductById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Create
const createProduct = async (req, res) => {
  try {
    const newItem = await model.createProduct(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Update
const updateProduct = async (req, res) => {
  try {
    const updated = await model.updateProduct(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete
const deleteProduct = async (req, res) => {
  try {
    await model.deleteProduct(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
