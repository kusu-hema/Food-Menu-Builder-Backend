const pool = require('../config/dbconn');


class CategoryModel {
 async getAllCategories() {
  try {
   // Select all columns from the 'category' table
   const query = 'SELECT * FROM category';
   const { rows } = await pool.query(query);
   return rows;
    } catch (err) {
     console.error('Error in getAllCategories:', err);
   throw err;
  }
 }


 async getCategoryById(id) {
  try {
   // Select a single record by the primary key `sno`
   const query = 'SELECT * FROM category WHERE sno = $1';
   const { rows } = await pool.query(query, [id]);
   return rows[0];
   } catch (err) {
   console.error('Error in getCategoryById:', err);
   throw err;
  }
 }


  async createCategory({ image, category_name }) {
    try {
      // Insert a new record into the 'category' table
      const query = 'INSERT INTO category (image, category_name) VALUES ($1, $2) RETURNING *;';
      const values = [image, category_name];
      console.log('Executing query:', query, 'with values:', values);
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (err) {
      console.error('Error in createCategory:', err);
      throw err;
    }
  }


  async updateCategory(id, { image, category_name }) {
    try {
      // Update a record in the 'category' table
      const query = 'UPDATE category SET image = $1, category_name = $2 WHERE sno = $3 RETURNING *;';
      const values = [image, category_name, id];
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (err) {
      console.error('Error in updateCategory:', err);
      throw err;
    }
  }


  async deleteCategory(id) {
    try {
      // Delete a record by `sno`
      const query = 'DELETE FROM category WHERE sno = $1;';
      await pool.query(query, [id]);
      return true;
    } catch (err) {
      console.error('Error in deleteCategory:', err);
      throw err;
    }
  }
}


module.exports = new CategoryModel();