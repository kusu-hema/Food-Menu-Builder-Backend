const pool = require("../config/dbconn");

class CategoryModel {
  async getAllCategories() {
    const { rows } = await pool.query("SELECT * FROM categories ORDER BY id ASC");
    return rows;
  }

  async getCategoryById(id) {
    const { rows } = await pool.query("SELECT * FROM categories WHERE id=$1", [id]);
    return rows[0];
  }

  async createCategory({ category_name }) {
    const query = `
      INSERT INTO categories (category_name)
      VALUES ($1) RETURNING *`;
    const { rows } = await pool.query(query, [category_name]);
    return rows[0];
  }

  async updateCategory(id, { category_name }) {
    const query = `
      UPDATE categories
      SET category_name=$1
      WHERE id=$2 RETURNING *`;
    const { rows } = await pool.query(query, [category_name, id]);
    return rows[0];
  }

  async deleteCategory(id) {
    await pool.query("DELETE FROM categories WHERE id=$1", [id]);
    return true;
  }
}

module.exports = new CategoryModel();
