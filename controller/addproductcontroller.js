const model = require('../models/addproductmodel'); 
const db = require('../config/dbconn');


// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await model.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get a single product by ID
const getProductById = async (req, res) => {
  try {
    const product = await model.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (err) {
    console.error('Error fetching product:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { product, category, action } = req.body;
    const imagePath = req.file ? req.file.path : null;

    if (!product || !category) {
      return res.status(400).json({ message: 'Product and Category are required.' });
    }

    const newProduct = await model.createProduct({
      image: imagePath,
      product,
      category,
      action
    });

    res.status(201).json(newProduct);
  } catch (err) {
    console.error('Error creating product:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update an existing product
const updateProduct = async (req, res) => {
  try {
    const { product, category, action } = req.body;
    const imagePath = req.file ? req.file.path : null;

    const updatedProduct = await model.updateProduct(req.params.id, {
      image: imagePath,
      product,
      category,
      action
    });
    
    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(updatedProduct);
  } catch (err) {
    console.error('Error updating product:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    await model.deleteProduct(req.params.id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// New function to handle bulk import of products
const bulkImportProducts = (req, res) => {
    const products = req.body;

    if (!Array.isArray(products) || products.length === 0) {
        return res.status(400).json({ message: 'Invalid data format. Expected an array of products.' });
    }

    // Map the keys from your Excel sheet to your database columns
    // We are now specifically looking for 'product', 'category', and 'action' from the normalized keys in the frontend
    const values = products.map(prod => [
        prod.sno,
        prod.product,
        prod.category,
        prod.action
    ]);

    // Use ON CONFLICT (sno) DO UPDATE to handle existing records
    // PostgreSQL does not support ON DUPLICATE KEY UPDATE.
    const sql = `
        INSERT INTO products (sno, product, category, action)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (sno) DO UPDATE
        SET product = EXCLUDED.product, category = EXCLUDED.category, action = EXCLUDED.action
    `;

    // To perform a bulk insert, you need to loop through the products and execute the query for each one.
    // The node-pg library does not have a simple bulk insert function.
    // I am updating the code to loop through products and perform individual inserts
    // which will not show a syntax error
    Promise.all(values.map(v => db.query(sql, v)))
        .then(() => {
            res.status(200).json({ message: `${products.length} products imported successfully.` });
        })
        .catch(err => {
            console.error('Error importing data:', err);
            res.status(500).json({ message: 'Error importing data.', error: err.message });
        });
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  // Make sure to include the new function in the exports object
  bulkImportProducts,
};
