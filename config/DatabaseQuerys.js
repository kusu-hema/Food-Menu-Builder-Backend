



// category Table --------------
// CREATE TABLE category (
//   sno SERIAL PRIMARY KEY,
//   category_name VARCHAR(100) NOT NULL,
//   image TEXT
// );




// Customers Table -------------
// CREATE TABLE customers (
//   id SERIAL PRIMARY KEY,
//   name VARCHAR(100) NOT NULL,
//   phone VARCHAR(20),
//   start TIMESTAMP,
//   end_date TIMESTAMP,
//   type VARCHAR(50),
//   location VARCHAR(100),
//   status VARCHAR(20)
// );




// products Table --------------
// CREATE TABLE products (
//   sno SERIAL PRIMARY KEY,
//   image TEXT,
//   product VARCHAR(100) NOT NULL,
//   category VARCHAR(100),
//   action VARCHAR(100)
// );




// #Invoice .............................................................................//


// CREATE TABLE IF NOT EXISTS categories (
//   id SERIAL PRIMARY KEY,
//   sno INT,
//   category_name VARCHAR(150) NOT NULL,
//   created_at TIMESTAMP DEFAULT now()
// );

// CREATE TABLE IF NOT EXISTS products (
//   id SERIAL PRIMARY KEY,
//   category_id INT REFERENCES categories(id) ON DELETE SET NULL,
//   product VARCHAR(200) NOT NULL,
//   image VARCHAR(255),
//   created_at TIMESTAMP DEFAULT now()
// );

// CREATE TABLE IF NOT EXISTS menus (
//   id SERIAL PRIMARY KEY,
//   customer_name VARCHAR(200),
//   contact VARCHAR(30),
//   place VARCHAR(200),
//   date DATE,
//   created_at TIMESTAMP DEFAULT now()
// );

// CREATE TABLE IF NOT EXISTS menu_contexts (
//   id SERIAL PRIMARY KEY,
//   menu_id INT REFERENCES menus(id) ON DELETE CASCADE,
//   event_date DATE,
//   meal VARCHAR(50),
//   members INT,
//   buffet VARCHAR(50),
//   created_at TIMESTAMP DEFAULT now()
// );

// CREATE TABLE IF NOT EXISTS menu_categories (
//   id SERIAL PRIMARY KEY,
//   context_id INT REFERENCES menu_contexts(id) ON DELETE CASCADE,
//   category_name VARCHAR(150) NOT NULL,
//   created_at TIMESTAMP DEFAULT now()
// );

// CREATE TABLE IF NOT EXISTS menu_items (
//   id SERIAL PRIMARY KEY,
//   category_id INT REFERENCES menu_categories(id) ON DELETE CASCADE,
//   item_name VARCHAR(200) NOT NULL,
//   created_at TIMESTAMP DEFAULT now()
// );

// CREATE TABLE IF NOT EXISTS invoices (
//   id SERIAL PRIMARY KEY,
//   menu_id INT REFERENCES menus(id) ON DELETE CASCADE,
//   subtotal NUMERIC(12,2) DEFAULT 0,
//   gst NUMERIC(12,2) DEFAULT 0,
//   grand_total NUMERIC(12,2) DEFAULT 0,
//   advance NUMERIC(12,2) DEFAULT 0,
//   balance NUMERIC(12,2) DEFAULT 0,
//   lead_counters NUMERIC(12,2) DEFAULT 0,
//   water_bottles NUMERIC(12,2) DEFAULT 0,
//   cooking_charges NUMERIC(12,2) DEFAULT 0,
//   labour_charges NUMERIC(12,2) DEFAULT 0,
//   transport_charges NUMERIC(12,2) DEFAULT 0,
//   created_at TIMESTAMP DEFAULT now()
// );

                                                                                                                        
// CREATE INDEX IF NOT EXISTS idx_menu_date ON menus(date);
// CREATE INDEX IF NOT EXISTS idx_context_menu ON menu_contexts(menu_id);
// CREATE INDEX IF NOT EXISTS idx_cat_context ON menu_categories(context_id);
// CREATE INDEX IF NOT EXISTS idx_item_category ON menu_items(category_id);






// Invoice .............................................................................//


// DROP TABLE menu_items CASCADE;
// DROP TABLE menu_contexts CASCADE;
// DROP TABLE invoices CASCADE;
// DROP TABLE clients CASCADE;
// DROP TABLE menu_products CASCADE;
// DROP TABLE categories CASCADE;



// CREATE TABLE categories (
//     id SERIAL PRIMARY KEY,
//     category_name TEXT NOT NULL
// );


// CREATE TABLE menu_products (
//     id SERIAL PRIMARY KEY,
//     category_id INT REFERENCES categories(id) ON DELETE SET NULL,
//     product_name TEXT NOT NULL,
//     image TEXT
// );

// CREATE TABLE clients (
//     id SERIAL PRIMARY KEY,
//     name TEXT NOT NULL,
//     contact TEXT,
//     place TEXT
// );


// CREATE TABLE invoices (
//     id SERIAL PRIMARY KEY,
//     client_id INT REFERENCES clients(id) ON DELETE CASCADE,
//     event_date DATE NOT NULL,
//     created_at TIMESTAMP DEFAULT NOW()
// );

// CREATE TABLE menu_contexts (
//     id SERIAL PRIMARY KEY,
//     invoice_id INT REFERENCES invoices(id) ON DELETE CASCADE,
//     meal_type TEXT NOT NULL,
//     members INT,
//     buffet TEXT
// );


// CREATE TABLE menu_items (
//     id SERIAL PRIMARY KEY,
//     menu_context_id INT REFERENCES menu_contexts(id) ON DELETE CASCADE,
//     product_id INT REFERENCES menu_products(id) ON DELETE CASCADE
// );