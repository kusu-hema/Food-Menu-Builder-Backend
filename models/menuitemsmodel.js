const pool = require ('../config/dbconn');

class MenuItemModel { 
    async getAllMenuItems() {
        const query = 'SELECT * FROM menu_items ORDER BY id DESC';
        const { rows } = await pool.query (query);
        return rows;
    }

    async getMenuItemsById (id){
        const query = 'SELECT * FROM menu_items WHERE id = $1';
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    }

    async createMenuItems ({ customer_name, contact, place, date })
    {
        const query= `
        INSERT INTO menu_items (category_id, item_name)
        VALUES ($1, $2)
        RETURNING*; `;
        const values = [category_id, item_name];
        const{rows} = await pool.query(query, values);
        return rows[0];

    }

    async updateMenuItems (id, {category_id, item_name}){
        const query = `
        UPDATE menu_items 
        SET  category_id, item_name
        WHERE id = $3
        RETURNING *; `;
        const Values = [category_id, item_name];
        const { rows } = await pool.query(query, values);
        return rows [0];
    }

 
 

  //  Delete a menu
  async deleteMenuItem(id) {
    const query = 'DELETE FROM menu_items WHERE id = $1';
    await pool.query(query, [id]);
    return true;
  }

}
module.exports = new MenuItemModel();
