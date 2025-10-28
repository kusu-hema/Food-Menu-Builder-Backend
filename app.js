const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express(); 

// Import the new category routes
const customerRoutes = require("./routes/authroute");
const productRoutes = require("./routes/addproductroute");
const categoryRoutes = require("./routes/addcategoryroute"); 



// INVOICE API 
const menuRoutes = require("./routes/menuroute");
const menucontextRoutes = require("./routes/menucontextsroute");
const menuitemsRoutes = require("./routes/menuitemsroute");
const menuinvoiceRoutes = require("./routes/menuinvoiceroute")


// Middleware
app.use(cors());
app.use(bodyParser.json());

// This is the critical line to serve images from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

// Base routes for your 'APIs'
app.use('/api/customers', customerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);  

// INVOICE API 
app.use('/api/menus', menuRoutes);
app.use('/api/menucontext', menucontextRoutes);
app.use('/api/menuitems', menuitemsRoutes)
app.use('/api/menuinvoice', menuinvoiceRoutes)



// Health check route (optional)
app.get("/", (req, res) => {
//  res.send("Customer, Product, and Category APIs are running");
 res.send(" Backend is running");

});

// Start the server
const port = 4000;
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}`);
});