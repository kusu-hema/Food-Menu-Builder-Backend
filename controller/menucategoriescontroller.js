const model = require ('../models/menucategoriesmodel');

// Get all menus
const getMenuCatergories = async (req, res) =>{
    try{
        const menus = await model.getAllMenuCategories();
        res.status(200).json(menus);
    }catch (error){
        console.error ('Error fetching menus:', error);
        res.ststus (500).json ({ messge: 'Internal Server Error'});
    }
    
    }

// Get one menu by ID 

const getMenuCategoriesById = async (req, res) => {
    try{
        const menu = await model.getMenuCategoriesById(req.params.id);
        if (!menu) return res.status(404).json({ message: "Menu not found "});
        res.status(200).json (menu);
    }
    catch (error) {
        console.error('Error fetching menu:', error);
        res.status(500).json ({ message : 'Internal server Error ' });
    }
}

//  Get one menu by ID
const createMenuCategories = async (req, res) => {
  try {
    const menu = await model.createMenuCategories(req.params.id);
    if (!menu) return res.status(404).json({ message: 'Menu not found' });
    res.status(200).json(menu);
  } catch (error) {   
    console.error('Error fetching menu:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


//  Update menu
const updateMenuCategories = async (req, res) => {
  try {
    const updatedMenu = await model.updateMenuCategories(req.params.id, req.body);
    if (!updatedMenu) return res.status(404).json({ message: 'Menu not found' });
    res.status(200).json(updatedMenu);
  } catch (error) {
    console.error('Error updating menu:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

//  Delete menu
const deleteMenuCategories = async (req, res) => {
  try {
    await model.deleteMenuCategories(req.params.id);
    res.status(200).json({ message: 'Menu deleted successfully' });
  } catch (error) {
    console.error('Error deleting menu:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getMenuCatergories,
  getMenuCategoriesById,
  createMenuCategories,
  updateMenuCategories,
  deleteMenuCategories,
};
