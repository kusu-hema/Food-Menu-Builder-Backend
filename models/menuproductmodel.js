const pool = require('../config/dbconn');

class ProductModel {
  async getAllProducts() {
    const { rows } = await pool.query('SELECT * FROM menu_products');
    return rows;
  }

  async getProductById(id) {
    const { rows } = await pool.query('SELECT * FROM menu_products WHERE id=$1', [id]);
    return rows[0];
  }

  async createProduct({ category_id, product_name, image }) {
    const query = `
      INSERT INTO menu_products (category_id, product_name, image)
      VALUES ($1, $2, $3) RETURNING *`;
    const { rows } = await pool.query(query, [category_id, product_name, image]);
    return rows[0];
  }

  async updateProduct(id, { category_id, product_name, image }) {
    const query = `
      UPDATE menu_products
      SET category_id=$1, product_name=$2, image=$3
      WHERE id=$4 RETURNING *`;
    const { rows } = await pool.query(query, [category_id, product_name, image, id]);
    return rows[0];
  }

  async deleteProduct(id) {
    await pool.query('DELETE FROM menu_products WHERE id=$1', [id]);
    return true;
  }
}

module.exports = new ProductModel();
