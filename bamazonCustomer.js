// Andrew Ton
// bamazonCustomer.js

var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");

// initialize connection with database
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "bamazon_DB"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    readProduct();
  });



// Read items (id, name, price, quantity)
function readProduct() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
    
      // NEED FORMATTING
      console.log("Item ID  Product Name             Department Name    Price  Stock\n");
      console.log("-------  -----------------------  -----------------  -----  -----\n");
      console.table(["a","b","c"]);
    
    //   console.log(JSON.stringify(res, null, 2)); 
      
    });
  }
// What id product to buy

// How many of product to buy

// check if available, if not "Insufficient quantity"

// connection.end();
