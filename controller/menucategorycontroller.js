const model = require("../models/menucategorymodel");

// Get all
const getCategories = async (req, res) => {
  try {
    const data = await model.getAllCategories();
    res.json(data);
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// Get by ID
const getCategoryById = async (req, res) => {
  try {
    const item = await model.getCategoryById(req.params.id);
    if (!item) return res.status(404).json({ message: "Not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Create
const createCategory = async (req, res) => {
  try {
    const newItem = await model.createCategory(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Update
const updateCategory = async (req, res) => {
  try {
    const updated = await model.updateCategory(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Delete
const deleteCategory = async (req, res) => {
  try {
    await model.deleteCategory(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
