const pool = require('../config/dbconn');

class InvoiceModel {
  async getAllInvoices() {
    const { rows } = await pool.query('SELECT * FROM invoices ORDER BY id DESC');
    return rows;
  }

  async getInvoiceById(id) {
    const { rows } = await pool.query('SELECT * FROM invoices WHERE id=$1', [id]);
    return rows[0];
  }

  async createInvoice({ client_id, event_date }) {
    const query = `
      INSERT INTO invoices (client_id, event_date)
      VALUES ($1, $2) RETURNING *`;
    const { rows } = await pool.query(query, [client_id, event_date]);
    return rows[0];
  }

  async updateInvoice(id, { client_id, event_date }) {
    const query = `
      UPDATE invoices
      SET client_id=$1, event_date=$2
      WHERE id=$3 RETURNING *`;
    const { rows } = await pool.query(query, [client_id, event_date, id]);
    return rows[0];
  }

  async deleteInvoice(id) {
    await pool.query('DELETE FROM invoices WHERE id=$1', [id]);
    return true;
  }
}

module.exports = new InvoiceModel();
