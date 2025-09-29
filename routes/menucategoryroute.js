const express = require("express");
const router = express.Router();
const controller = require("../controller/menucategorycontroller");



// CRUD APIs

// Get all
router.get("/", controller.getCategories); 

// Get by ID  
router.get("/:id", controller.getCategoryById);

// Post api 
router.post("/", controller.createCategory);      

// Update 
router.put("/:id", controller.updateCategory);    

// delete
router.delete("/:id", controller.deleteCategory); 

module.exports = router;
