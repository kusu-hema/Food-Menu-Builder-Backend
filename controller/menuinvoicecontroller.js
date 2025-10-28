const model = require('../models/menuinvoicemodel')

const getMenuInvoice = async (req, res) =>{
    try{
        const menus = await model.getAllMenuItems();
        res.status(200).json(menus);
    }
    catch(error) {
        console.error('Error fetching menus:', error);
        res.status(500).json({message : 'Internal Server Error'});
    }
}

const getMenuInvoiceById = async (req,res) =>{
    try{
        const menu = await model.getMenuItemsById(req.params.id);
        if(!menu) return res.status (404).json ({message :'Menu not found'});
        res.status (200).json(menu);
    }
    catch (error){
        console.error('Error fetching menu:', error);
        res.status(500).json({ message : 'Internal Server Error' });
    }
}

const createMenuInvoice = async (req, res) =>{
    try{
        const newMenu = await model.createMenuItems(req.body);
        res.status (201).json (newMenu);
    }
    catch(error) {
        console.error('Error creating menu:', error);
        res.status(500).json ({ message : 'Internal Server Error '});
    }
}


const updateMenuInvoice = async ( req, res) =>{
    try {
        const updateMenu = await model.updateMenuItems(req.params.id, req.body);
        if(!updatedMenu) return res.status (404).json ({ message : 'Menu not found' });
        res.status(500).json ({ message : 'Internal Server Error '});
    }
    catch (error){
        console.error('Error deleting menu: ', error );
        res.status (500).json ({ message : 'Internal Server Error'});
    }
}


const deleteMenuInvoice = async ( req, res) => {
    try{
        await model.deleteMenuItem (req.params.id);
        res.status(200).json ({ message : 'Menu deleted successfully'});
    }
    catch (error){
        console.error ('Error deleting menu :', error);
        res.status (500) .json ({ message : 'Internal Sever Error'});
    }
};
 

module.exports = {
  getMenuInvoice,
  getMenuInvoiceById,
  createMenuInvoice,
  updateMenuInvoice,
  deleteMenuInvoice,
};
