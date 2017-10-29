var mySql = require("mysql");
var prompt = require("prompt");
var Table = require("cli-table");

var connection = mySql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database:'Bamazon'

});

var purchasedProduct = [];

connection.connect();

function bamazonCustomerPortal(){
connection.query('SELECT ItemID, ProductName, Price, StockQuantity FROM Products', function(err, result){
	if(err) console.log(err);

	var table = new Table({
		head:['Item ID', 'Product Name', 'Price', 'Quantity'],
		colWidths:[10,80,10, 15]
	});

	for(var i = 0; i < result.length; i++){
		table.push([result[i].ItemID, result[i].ProductName, result[i].Price, result[i].StockQuantity]);
	}

	console.log(table.toString());
	purchase();
  });
};

	
function purchase(){

var productInfo = {
	properties: {
			itemID: {description: "Please enter the ID of the item you wish to purchase: "},
			Quantity: {description: "How many would you like to purchase?"}
		}
};

prompt.start();

prompt.get(productInfo, function(err, result){

	var customerPurchase = {
		itemID: result.itemID,
		Quantity: result.Quantity
	};

	purchasedProduct.push(customerPurchase);

	connection.query('SELECT * FROM Products WHERE ItemID=?', purchasedProduct[0].itemID, function(err, result){

		if(err) console.log(err, 'Item ID invalid');

		if(result[0].StockQuantity < purchasedProduct[0].Quantity){
			console.log('Insufficient quantity!')
			connection.end();

		} else if(result[0].StockQuantity >= purchasedProduct[0].Quantity){
			console.log(purchasedProduct[0].Quantity + ' items purchased');
			console.log(result[0].ProductName + ' '+ result[0].Price);

			var salesTotal = result[0].Price*purchasedProduct[0].Quantity;

			console.log("Totat Cost: " + salesTotal);

			updatedQuantity = result[0].StockQuantity - purchasedProduct[0].Quantity;

			connection.query("UPDATE Products SET StockQuantity = " + updatedQuantity + " WHERE ItemID = " + purchasedProduct[0].itemID, function(err, result){
			if(err) console.log(err);

			console.log("Your order has been processed. Thank you for shopping at Bamazon");
			connection.end();
			})
			bamazonCustomerPortal();
		};
	 })
  });
};

bamazonCustomerPortal();


