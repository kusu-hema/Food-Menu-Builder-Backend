const model = require('../models/menucontextmodel');

// Get all contexts
const getContexts = async (req, res) => {
  try {
    const data = await model.getAllContexts();
    res.json(data);
  } catch (err) {
    console.error('Error fetching contexts:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get context by ID
const getContextById = async (req, res) => {
  try {
    const item = await model.getContextById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Create new context
const createContext = async (req, res) => {
  try {
    const newItem = await model.createContext(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Update context
const updateContext = async (req, res) => {
  try {
    const updated = await model.updateContext(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete context
const deleteContext = async (req, res) => {
  try {
    await model.deleteContext(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getContexts,
  getContextById,
  createContext,
  updateContext,
  deleteContext
};
