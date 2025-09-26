const pool = require('../config/dbconn');

class ContextModel {
  async getAllContexts() {
    const { rows } = await pool.query('SELECT * FROM menu_contexts ORDER BY id DESC');
    return rows;
  }

  async getContextById(id) {
    const { rows } = await pool.query('SELECT * FROM menu_contexts WHERE id=$1', [id]);
    return rows[0];
  }

  async createContext({ invoice_id, meal_type, members, buffet }) {
    const query = `
      INSERT INTO menu_contexts (invoice_id, meal_type, members, buffet)
      VALUES ($1, $2, $3, $4) RETURNING *`;
    const { rows } = await pool.query(query, [invoice_id, meal_type, members, buffet]);
    return rows[0];
  }

  async updateContext(id, { invoice_id, meal_type, members, buffet }) {
    const query = `
      UPDATE menu_contexts
      SET invoice_id=$1, meal_type=$2, members=$3, buffet=$4
      WHERE id=$5 RETURNING *`;
    const { rows } = await pool.query(query, [invoice_id, meal_type, members, buffet, id]);
    return rows[0];
  }

  async deleteContext(id) {
    await pool.query('DELETE FROM menu_contexts WHERE id=$1', [id]);
    return true;
  }
}

module.exports = new ContextModel();

