const model = require('../models/menumodel');

// =========================================================
// Define all controller functions
// =========================================================

// Get all menus
const getMenus = async (req, res) => {
    try {
        const menus = await model.getAllMenus();
        res.status(200).json(menus);
    } catch (error) {
        console.error('Error fetching menus:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Get full menu and invoice details by ID
const getFullMenuDetails = async (req, res) => {
    // 1. CRITICAL FIX: Explicitly parse the parameter into an integer
    const menuId = parseInt(req.params.id); 

    // 2. Stop execution if parsing fails (prevents ":id" database error)
    if (isNaN(menuId)) {
        console.error('Invalid Menu ID format received:', req.params.id);
        return res.status(400).json({ message: 'Invalid Menu ID format. Must be a number.' });
    }

    try {
        // Pass the guaranteed numerical ID to the model
        const fullDetails = await model.getFullMenuDetails(menuId); 
        
        if (!fullDetails) {
            // Returns 404 if the menu ID was valid but not found in the database.
            return res.status(404).json({ message: 'Menu or Invoice details not found' });
        }
        res.status(200).json(fullDetails); 
        
    } catch (error) {
        console.error('Error fetching full menu details:', error);
        res.status(500).json({ message: 'Internal Server Error fetching detailed menu' });
    }
};

// Get menu by ID
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

// Create a new menu
const createMenu = async (req, res) => {
    try {
        const newMenu = await model.createMenu(req.body);
        res.status(201).json(newMenu);
    } catch (error) {
        if (error.message === 'Phone number already exists') {
            return res.status(400).json({ message: error.message });
        }
        console.error('Error creating menu:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Update a menu
const updateMenu = async (req, res) => {
    try {
        const updatedMenu = await model.updateMenu(req.params.id, req.body);
        if (!updatedMenu) return res.status(404).json({ message: 'Menu not found' });
        res.status(200).json(updatedMenu);
    } catch (error) {
        if (error.message === 'Phone number already exists') {
            return res.status(400).json({ message: error.message });
        }
        console.error('Error updating menu:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Delete a menu
const deleteMenu = async (req, res) => {
    try {
        await model.deleteMenu(req.params.id);
        res.status(200).json({ message: 'Menu deleted successfully' });
    } catch (error) {
        console.error('Error deleting menu:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// =========================================================
// Export all defined functions
// =========================================================
module.exports = {
    getMenus,
    getFullMenuDetails,
    getMenuById,
    createMenu,
    updateMenu,
    deleteMenu
};