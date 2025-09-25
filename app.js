const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Import the new category routes
const customerRoutes = require("./routes/authroute");
const productRoutes = require("./routes/addproductroute");
const categoryRoutes = require("./routes/addcategoryroute"); 


// INVOICE API 
const menu_productRoutes = require("./routes/menuproductroute");
// const menu_categoryRoutes = require("./routes/categoryroute");
// const invoiceRoutes = require("./routes/invoiceroute");
// const contextRoutes = require("./routes/contextroute");


// Middleware
app.use(cors());
app.use(bodyParser.json());

// This is the critical line to serve images from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

// Base routes for your 'APIs'
app.use('/api/customers', customerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes); // Use the new category routes


// INVOICE API 
app.use('/api/menu_products', menu_productRoutes);
// app.use('/api/menu_categories', menu_categoryRoutes);
// app.use('/api/invoices', invoiceRoutes);
// app.use('/api/contexts', contextRoutes);


// Health check route (optional)
app.get("/", (req, res) => {
 res.send("Customer, Product, and Category APIs are running");
});

// Start the server
const port = 4000;
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}`);
});