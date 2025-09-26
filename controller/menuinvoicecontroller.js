const model = require('../models/menuinvoicemodel');

// Get all invoices
const getInvoices = async (req, res) => {
  try {
    const data = await model.getAllInvoices();
    res.json(data);
  } catch (err) {
    console.error('Error fetching invoices:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get invoice by ID
const getInvoiceById = async (req, res) => {
  try {
    const item = await model.getInvoiceById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Create new invoice
const createInvoice = async (req, res) => {
  try {
    const newItem = await model.createInvoice(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Update invoice
const updateInvoice = async (req, res) => {
  try {
    const updated = await model.updateInvoice(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete invoice
const deleteInvoice = async (req, res) => {
  try {
    await model.deleteInvoice(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  getInvoices,
  getInvoiceById,
  createInvoice,
  updateInvoice,
  deleteInvoice
};
