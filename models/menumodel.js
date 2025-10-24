const pool = require('../config/dbconn');

class MenuModel {
  //  Get all menus
  async getAllMenus() {
    const query = 'SELECT * FROM menus ORDER BY id DESC';
    const { rows } = await pool.query(query);
    return rows;
  }

  //  Get a single menu by ID
  async getMenuById(id) {
    const query = 'SELECT * FROM menus WHERE id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }

  //  Create a new menu
  async createMenu({ customer_name, contact, place, date }) {
    const query = `
      INSERT INTO menus (customer_name, contact, place, date)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [customer_name, contact, place, date];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  //  Update an existing menu
  async updateMenu(id, { customer_name, contact, place, date }) {
    const query = `
      UPDATE menus
      SET customer_name = $1, contact = $2, place = $3, date = $4
      WHERE id = $5
      RETURNING *;
    `;
    const values = [customer_name, contact, place, date, id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  //  Delete a menu
  async deleteMenu(id) {
    const query = 'DELETE FROM menus WHERE id = $1';
    await pool.query(query, [id]);
    return true;
  }
}

module.exports = new MenuModel();
