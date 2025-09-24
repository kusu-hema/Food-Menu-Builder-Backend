



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







// Invoice ...............................................................................

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