const pool = require('../config/dbconn');

class MenuContextModel {

  //  Get all menus
  async getAllMenuContext() {
    // Select all columns from the new table schema 
    const query = 'SELECT * FROM menu_contexts ORDER BY id DESC';
    const { rows } = await pool.query(query);
    return rows;
  }

  //  Get a menu by ID
  async getMenuContextById(id) {
    // Select a single record by the primary key `sno`
    const query = 'SELECT * FROM menu_contexts WHERE id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }

  //  Create new menu
  async updateMenuContext({ menu_id, event_date, meal, members, buffet  }) {
    // Insert a new record using the new column names
    const query = `
      INSERT INTO menu_contexts ( menu_id, event_date, meal, members, buffet )
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [ menu_id, event_date, meal, members, buffet];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  // Update existing menu by ID
  async updateMenuContextByI(id, {  menu_id, event_date, meal, members, buffet }) {
    const query = `
      UPDATE menu_contexts 
      SET menu_id = $1, event_date = $2, meal = $3, members = $4, buffet = $5
      WHERE id = $6
      RETURNING *;
    `;
    const values = [menu_id, event_date, meal, members, buffet];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  //  Delete a menu
  async deleteMenuContext(id) {
    const query = 'DELETE FROM menu_contexts WHERE id = $1';
    await pool.query(query, [id]);
    return true;
  }
}

module.exports = new MenuContextModel();
