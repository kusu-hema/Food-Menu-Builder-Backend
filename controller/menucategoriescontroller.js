const model = require ('../models/menucategoriesmodel');

// Get all menus
const getMenuContext = async (req, res) =>{
    try{
        const menus = await model.getAllMenuContext();
        res.status(200).json(menus);
    }catch (error){
        console.error ('Error fetching menus:', error);
        res.ststus (500).json ({ messge: 'Internal Server Error'});
    }
    
    }

// Get one menu by ID 

const getMenuById = async (req, res) => {
    try{
        const menu = await model.getMenuContextById(req.params.id);
        if (!menu) return res.status(404).json({ message: "Menu not found "});
        res.status(200).json (menu);
    }
    catch (error) {
        console.error('Error fetching menu:', error);
        res.status(500).json ({ message : 'Internal server Error ' });
    }
}

//  Get one menu by ID
const getMenuContextById = async (req, res) => {
  try {
    const menu = await model.getMenuContextById(req.params.id);
    if (!menu) return res.status(404).json({ message: 'Menu not found' });
    res.status(200).json(menu);
  } catch (error) {   
    console.error('Error fetching menu:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

//  Create new menu
const updateMenuContext = async (req, res) => {
  try {
    const newMenu = await model.updateMenuContext(req.body);
    res.status(201).json(newMenu);
  } catch (error) {
    console.error('Error creating menu:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

//  Update menu
const updateMenuContextById = async (req, res) => {
  try {
    const updatedMenu = await model.updateMenuContextById(req.params.id, req.body);
    if (!updatedMenu) return res.status(404).json({ message: 'Menu not found' });
    res.status(200).json(updatedMenu);
  } catch (error) {
    console.error('Error updating menu:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

//  Delete menu
const deleteMenuContext = async (req, res) => {
  try {
    await model.deleteMenuContext(req.params.id);
    res.status(200).json({ message: 'Menu deleted successfully' });
  } catch (error) {
    console.error('Error deleting menu:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getMenuContext,
  getMenuContextById,
  updateMenuContext,
  updateMenuContextById,
  deleteMenuContext,
};
