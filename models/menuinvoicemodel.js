const pool = require ('../config/dbconn');

class MenuModel{

    async getAllMenuItems() {
        const query = 'SELECT * FROM invoices ORDER BY id DESC';
        const { rows } = await pool.query (query);
        return rows;
    }

    async getMenuItemsById (id) {
        const query = 'SELECT * FROM invoices WHERE id = $1';
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    }
    
    async createMenuItems ({ menu_id, subtotal,gst, grand_total, advance, balance, lead_counters, water_bottles, cooking_charges, labour_charges, transport_charges })
    {
       const query= `INSERT INTO invoices (menu_id, subtotal, gst, grand_total, advance, balance, lead_counters, water_bottles, cooking_charges, labour_charges, transport_charges)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
       RETURNING*; `;
       const values = [menu_id, subtotal, gst, grand_total, advance, balance, lead_counters, water_bottles, cooking_charges, labour_charges, transport_charges];
       const { rows } = await pool.query(query, values);
       return rows[0];
    }
    async updateMenuItems (id ,  { menu_id, subtotal, gst, grand_total,advance,balance,lead_counters,water_bottles, cooking_charges,labour_charges, transport_charges }) {
       const query = `
       UPDATE invoices 
       SET menu_id, subtotal, gst, grand_total, advance, balance, lead_counters , water_bottles, cooking_charges, labour_charges, transport_charges
       WHERE ID = $12
       RETURNING * ;
       `;
       const Values = [ menu_id, subtotal, gst, grand_total, advance, balance, lead_counters, water_bottles, cooking_charges, labour_charges, transport_charges ];
       const { rows } = await pool.query(query, values);
       return rows [0];
    }
    async deleteMenuItem(id) {
        const query = 'DELETE FROM  invoices  WHERE id = $1';
        await pool.query(query, [id]);
        return true ;
    }
}
module.exports = new MenuModel();
