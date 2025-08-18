// File: app.js

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const customerRoutes = require("./routes/authroute");
const categoriesRoutes = require("./routes/categoryroute");

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ This is the critical line to serve images from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

// Base routes for your 'APIs'
app.use('/api/customers', customerRoutes);
app.use('/api/categories', categoriesRoutes);

// Health check route (optional)
app.get("/", (req, res) => {
  res.send("Customer and Categories APIs are running");
});

// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});