const pool = require ('../config/dbconn');

class MenuContextModel {
    
    // Get all Menus
    async getAllMenuCategories (){
      // select all columns from the new table schema
      const query = 'select * FROM menu_categories ORDER BY Id DESC';
      const { rows } = await pool.query(query);
      return rows;
    }

    // Get a menu by ID
    async getMenuCategoriesById(id){
    // select a single record by the primary key `sno`
    const query = `SELECT * FROM menu_categories WHERE id = $1`;
    const { rows } = await pool.query(query, [id]);
    return rows [0];
    }
    
    // Create new menu
    async createMenuCategories ({ context_id, category_name }) {
    // Inserrt a new record using the new column names 
    const query = ` 
    INSERT INTO menu_categories (context_id, category_name)
    VALUES ($1, $2)
    RETURNING*;
    `;
    const values = [context_id, category_name];
    const { rows } = await pool.query( query, values);
    return rows [0];
    }


    //Update existing menu by ID
    async updateMenuCategories (id , { context_id, category_name }){
        const query = `
        UPDATE menu_categories
        SET  context_id = $1, category_name = $2
        WHERE id = $3 
        RETURNING *;
        `;
        const values = [ context_id, category_name, id];
        const { rows } = await pool.query(query, values);
        return rows [0];
    }

    // Delte a menu 
    async deleteMenuCategories(id) {
        const query = 'DELETE FROM menu_contets WHERE id = $1';
        await pool.query(query, [id]);
        return true;

    }



}
 
module.exports = new MenuContextModel();

