const pool = require('../config/dbconn');

class CategoryModel {
  async getAllCategories() {
    const query = 'SELECT * FROM categories';
    const { rows } = await pool.query(query);
    return rows;
  }

  async getCategoryById(id) {
    const query = 'SELECT * FROM categories WHERE sno = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }

  async createCategory({ category_name, status, image }) {
    const query = `
      INSERT INTO categories (category_name, status, image)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [category_name, status, image];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  async updateCategory(id, { category_name, status, image }) {
    const query = `
      UPDATE categories
      SET category_name = $1, status = $2, image = $3
      WHERE sno = $4
      RETURNING *;
    `;
    const values = [category_name, status, image, id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  async deleteCategory(id) {
    const query = 'DELETE FROM categories WHERE sno = $1;';
    await pool.query(query, [id]);
    return true;
  }
}

module.exports = new CategoryModel();
