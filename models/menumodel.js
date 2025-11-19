const pool = require('../config/dbconn'); 

class MenuModel {
    // Get all menus
    async getAllMenus() {
        const query = 'SELECT * FROM menus ORDER BY id DESC';
        try {
            const { rows } = await pool.query(query);
            return rows;
        } catch (error) {
            console.error('Database Error in getAllMenus:', error);
            throw error;
        }
    }

    // Get a single menu by ID
    async getMenuById(id) {
        const query = 'SELECT * FROM menus WHERE id = $1';
        try {
            const { rows } = await pool.query(query, [id]);
            return rows[0];
        } catch (error) {
            console.error('Database Error in getMenuById:', error);
            throw error;
        }
    }

    /**
     * Retrieves full nested details for a menu, including invoice,
     * contexts, categories, and items, using LEFT JOINs and JSON aggregation.
     * * @param {number} id - The ID of the menu to fetch.
     * @returns {Object|null} The aggregated menu data or null if not found.
     */
    async getFullMenuDetails(id) {
        // The ID parameter is correctly expected as $1
        const query = `
            SELECT
                m.id AS menu_id, m.customer_name, m.contact, m.place, m.date AS booking_date,
                i.subtotal, i.gst, i.grand_total, i.advance, i.balance, 
                i.lead_counters, i.water_bottles, i.cooking_charges, i.labour_charges, i.transport_charges,
                COALESCE(
                    json_agg(
                        json_build_object(
                            'context_id', mc.id, 'event_date', mc.event_date, 'meal', mc.meal, 'members', mc.members, 'buffet', mc.buffet,
                            'categories', (
                                SELECT COALESCE(
                                    json_agg(
                                        json_build_object('category_id', mcat.id, 'category_name', mcat.category_name,
                                            'items', (
                                                SELECT COALESCE(json_agg(mi.item_name), '[]'::json)
                                                FROM menu_items mi WHERE mi.category_id = mcat.id
                                            )
                                        )
                                    ), '[]'::json)
                                FROM menu_categories mcat WHERE mcat.context_id = mc.id
                            )
                        )
                    ) FILTER (WHERE mc.id IS NOT NULL), '[]'::json) AS menu_contexts
            FROM
                menus m
            LEFT JOIN invoices i ON m.id = i.menu_id
            LEFT JOIN menu_contexts mc ON m.id = mc.menu_id
            WHERE
                m.id = $1
            GROUP BY
                m.id, m.customer_name, m.contact, m.place, m.date,
                i.subtotal, i.gst, i.grand_total, i.advance, i.balance, 
                i.lead_counters, i.water_bottles, i.cooking_charges, i.labour_charges, i.transport_charges;
        `;
        
        try {
            // Passes the ID value to the pg driver
            const { rows } = await pool.query(query, [id]); 
            
            // Returns null if the query found zero rows
            if (rows.length === 0) return null;
            
            return rows[0]; 
        } catch (error) {
            console.error('Database Error in getFullMenuDetails:', error);
            throw error;
        }
    }

    // Create a new menu
    async createMenu({ customer_name, contact, place, date }) {
        const query = `
          INSERT INTO menus (customer_name, contact, place, date)
          VALUES ($1, $2, $3, $4)
          RETURNING *;
        `;
        const values = [customer_name, contact, place, date];
        try {
          const { rows } = await pool.query(query, values);
          return rows[0];
        } catch (error) {
          if (error.code === '23505') { // unique violation
            throw new Error('Phone number already exists');
          }
          console.error('Database Error in createMenu:', error);
          throw error;
        }
    }

    // Update an existing menu
    async updateMenu(id, { customer_name, contact, place, date }) {
        const query = `
          UPDATE menus
          SET customer_name = $1, contact = $2, place = $3, date = $4
          WHERE id = $5
          RETURNING *;
        `;
        const values = [customer_name, contact, place, date, id];
        try {
          const { rows } = await pool.query(query, values);
          return rows[0];
        } catch (error) {
          if (error.code === '23505') { // unique violation
            throw new Error('Phone number already exists');
          }
          console.error('Database Error in updateMenu:', error);
          throw error;
        }
    }

    // Delete a menu
    async deleteMenu(id) {
        const query = 'DELETE FROM menus WHERE id = $1';
        try {
            await pool.query(query, [id]);
            return true;
        } catch (error) {
            console.error('Database Error in deleteMenu:', error);
            throw error;
        }
    }
}

module.exports = new MenuModel(); 