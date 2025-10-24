const model = require('../models/menumodel');

// ✅ Get all menus
const getMenus = async (req, res) => {
  try {
    const menus = await model.getAllMenus();
    res.status(200).json(menus);
  } catch (error) {
    console.error('Error fetching menus:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// ✅ Get one menu by ID
const getMenuById = async (req, res) => {
  try {
    const menu = await model.getMenuById(req.params.id);
    if (!menu) return res.status(404).json({ message: 'Menu not found' });
    res.status(200).json(menu);
  } catch (error) {
    console.error('Error fetching menu:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// ✅ Create new menu
const createMenu = async (req, res) => {
  try {
    const newMenu = await model.createMenu(req.body);
    res.status(201).json(newMenu);
  } catch (error) {
    console.error('Error creating menu:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// ✅ Update menu
const updateMenu = async (req, res) => {
  try {
    const updatedMenu = await model.updateMenu(req.params.id, req.body);
    if (!updatedMenu) return res.status(404).json({ message: 'Menu not found' });
    res.status(200).json(updatedMenu);
  } catch (error) {
    console.error('Error updating menu:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// ✅ Delete menu
const deleteMenu = async (req, res) => {
  try {
    await model.deleteMenu(req.params.id);
    res.status(200).json({ message: 'Menu deleted successfully' });
  } catch (error) {
    console.error('Error deleting menu:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getMenus,
  getMenuById,
  createMenu,
  updateMenu,
  deleteMenu,
};
