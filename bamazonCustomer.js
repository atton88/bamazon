// Andrew Ton
// bamazonCustomer.js

var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");
var quit = " [Enter Q to quit]";

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
    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;
      // Log all results of the SELECT statement
    
      // Create table
      // NEED FORMATTING
      var productsArr = [];
      for (var i = 0; i < results.length; i++){
        productsArr.push([results[i].item_id, results[i].product_name, results[i].department_name, results[i].price, results[i].stock_quantity]);
      }
      console.table(["Item ID", "Product Name", "Department", "Price", "Stock"], productsArr)
      
      // console.log(JSON.stringify(results, null, 2)); //test
      
      buyProduct(results);
    });
  }

function buyProduct(){

  // Ask for id and quantity of item to buy
  inquirer.prompt([{
    name: "id",
    message: "What is the ID of the product you want to buy?" + quit, // adds [Enter Q to quit]
    type: "input",
    validate: function(id) {
      return isNumber(id);
    }
  } , {
    when: function (response) {
      return (response.id !== "Q")
    },
    name: "buy_quantity",
    message: "How many of the product do you want to buy?" + quit, // adds [Enter Q to quit]
    type: "input",
    validate: function(buy_quantity) {
      return isNumber(buy_quantity);
    }
  }
]). then(function(result) {
  if (result.id === "Q" || result.buy_quantity === "Q") { // exit if user pressed Q
    exit();
  } else {
    connection.query(
      "SELECT * FROM products WHERE ?", // search for item_id
      {
        item_id: result.id
      },
      function(err, databaseResults) {
        if (err) throw err;

        // console.log(databaseResults);
        
        // If not enough inventory
        if (databaseResults[0].stock_quantity < result.buy_quantity) { // check inventory
          console.log("Insufficient Stock. Unable to buy " + result.buy_quantity + " " + databaseResults[0].product_name + "'s.");
          buyProduct(); // return to buy screen

        // If enough, buy it
        } else {
          console.log("You successfully purchased " + result.buy_quantity + " " + databaseResults[0].product_name + "'s!");
          // updateProduct(result.id, result.buy_quantity)
          buyProduct(); // return to buy screen
        }
      }
    )
  }
})
}

function updateProduct(id, quantity){

}

// check if input is a number or Q
function isNumber(str) {
    if (str === "Q") {
      return true;
    }
    if (parseFloat(str)){
        return true;
    }
    return false;
}

function exit() {
  connection.end();
}