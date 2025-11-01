const pool = require ('../config/dbconn');

class MenuInvoiceModel{ 

    async getAllMenuInvoice () {
        const query = 'SELECT * FROM invoices ORDER BY id DESC';
        const { rows } = await pool.query (query);
        return rows;
    }

    async getMenuInvoiceById (id) {
        const query = 'SELECT * FROM invoices WHERE id = $1';
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    }
    
    async createMenuInvoice ({ menu_id, subtotal,gst, grand_total, advance, balance, lead_counters, water_bottles, cooking_charges, labour_charges, transport_charges })
    {
       const query= `INSERT INTO invoices (menu_id, subtotal, gst, grand_total, advance, balance, lead_counters, water_bottles, cooking_charges, labour_charges, transport_charges)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
       RETURNING*; `;
       const values = [menu_id, subtotal, gst, grand_total, advance, balance, lead_counters, water_bottles, cooking_charges, labour_charges, transport_charges];
       const { rows } = await pool.query(query, values);
       return rows[0];
    }

    async updateMenuInvoice (id ,  { menu_id, subtotal, gst, grand_total,advance,balance,lead_counters,water_bottles, cooking_charges,labour_charges, transport_charges }) {
       const query = `
       UPDATE invoices 
       SET menu_id = $1, subtotal = $2, gst = $3, grand_total = $4, advance = $5, balance = 6, lead_counters = $7, water_bottles = $8, cooking_charges =, $9, labour_charges = $10, transport_charges =$ 11
       WHERE ID = $12
       RETURNING * ;
       `;
       const values = [ menu_id, subtotal, gst, grand_total, advance, balance, lead_counters, water_bottles, cooking_charges, labour_charges, transport_charges, id];
       const { rows } = await pool.query(query, values);
       return rows [0];
    }


    async deleteMenuInvoice (id) {
        const query = 'DELETE FROM  invoices  WHERE id = $1';
        await pool.query(query, [id]);
        return true ;
    }
}
module.exports = new MenuInvoiceModel();
