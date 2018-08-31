-- Andrew Ton
-- bamazon.sql

DROP DATABASE IF EXISTS bamazon_DB;

-- Create a MySQL Database called bamazon.
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

-- Then create a Table inside of that database called products.
CREATE TABLE products (
    item_id INT(10) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);

-- Test inserts
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Guitar", "Instrument", 200, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Piano", "Instrument", 800, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Drums", "Instrument", 300, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Last of Us", "Video Games", 60, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rocket League", "Video Games", 15, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Super Smash Bros. Melee", "Video Games", 30, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("IPA", "Beer", 30, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lager", "Beer", 30, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pilsner", "Beer", 30, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Time Machine", "Misc.", 1000000, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("? Button", "Misc.", 5, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Asteroid", "Misc.", 30000, 1);
