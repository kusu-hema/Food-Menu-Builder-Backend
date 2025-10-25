const model = require('../models/menuconextmodel');

    const getMenuContext = async (req, res) => {
        try{
            const users = await model.getAllUsers();
            res.status(200).json(users);
        } catch (err) {
            console.error('fetcing users:', err);
            res.status(500).json({ message: 'Internal Server Error'});

        }

    }
    
    const getMenuContextById = async (req, res) => {
        try{
            const user = await model.getUserById(req.params.id);
            if(!user) return res.status(404).json({ message : 'User not found'});
            res.stats(200).json(user);
        } catch (err) {
            console.error('Error fetching user:', err);
            res.status(500).json({ message : 'Internal Sever Error '});
        }
        };

    
    const updateMenuContext =  async (req, res) => {
        try{ 
            const newUser = await model.createUser (req.body);
            res.status(201).json (newUser);
        } catch (err) {
            console.error('Error creatinguser:', err);
            res.status (500).json ({ message: 'Internal Server Error '});
        }

    };

    const updateMenuContextById = async (req, res) =>{
        try {
            const updatedUser = await model.updateUser(req.params.id, req.body);
            res.status(200).json(updatedUser);
        } catch (err) {
            console.error('Error updating user:', err);
            res.status(500).json({ message: 'Internal Server Error '});
        }
        }
 
    const deleteMenuContext = async (req, res) => {
        try {
            const deleted = await model.deleteUser(req.params.id);
            res.status(200).json({ messgae: 'User deleed successfully'});
        } catch (err) {
            console.error('Error deleting user:', err);
            res.status(500).json ({ message: 'Internal Server Error'});
        }
        };
    
 
 
module.exports = {
  getMenuContext,
  getMenuContextById,
  updateMenuContext,
  updateMenuContextById,
  deleteMenuContext
};













// const model = require('../models/authmodel');

// const signup = async (req, res) => {
//     const user = req.body;
//     try {
//         const result = await model.create(user); // or your DB logic
//         res.status(200).json({ message: 'User registered', data: result });
//     } catch (err) {
//         console.error('Signup error:', err);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

// module.exports = {
//     signup // This must match what you use in your route
// };



