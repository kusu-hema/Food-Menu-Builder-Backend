// File: app.js

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const customerRoutes = require("./routes/authroute");
// ✅ Correct import statement for your categories router.
const categoriesRoutes = require("./routes/categoryroute");

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Base routes for your 'APIs'
app.use('/api/customers', customerRoutes);
// ✅ Correctly mount the categories router to its base path.
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