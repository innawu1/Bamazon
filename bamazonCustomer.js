var mySql = require("mysql");
var prompt = require("prompt");
var Table = require("cli-table");

var connection = mySql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Ixion_530!',
	database:'Bamazon'

});

var purchasedProduct = [];
connection.connect();

connection.query('SELECT ItemID, ProductName, Price FROM Products', function(err, result){
	if(err){
		console.log(err);
	}

	var table = new Table({
		head:['Item ID', 'Product Name', 'Price']

	});

	for(var i = 0; i < result.length; i++){
		table.push([result[i].ItemID, result[i].ProductName, result[i].Price]);
	}

	console.log(table.toString());
	purchase();
});

var purchase = function(){
	var productInfo = {
		  properties: {
			itemID: {description: 'Please enter the ID of the item you wish to purchase: '},
			Qunatity: {description: 'How many would you like to purchase?'}

	},
};

prompt.start();

prompt.get(productInfo, function(err, result){
	var customerPurchase = {
		itemID: result.itemID,
		Qunatity: result.Qunatity
	};

	purchasedProduct.push(customerPurchase);

	connection.query('SELECT * FROM Products WHERE ItemID=?', purchasedProduct[0].itemID, function(err, result){
		if(err){
			console.log(err, 'Item ID invalid');
		}

		if(result[0].StockQuantity < purchasedProduct[0].Qunatity){
			console.log('Insufficient quantity!')
			connection.end();
		}

		else if(res[0].StockQuantity >= purchasedProduct[0].Qunatity){
			console.log(purchasedProduct[0].Qunatity + ' items purchased');
			console.log(result[0].ProductName + ' '+ result[0].Price);

			updatedQuantity = result[0].StockQuantity - purchasedProduct[0].Qunatity;

			connection.query("UPDATE Products SET StockQuantity = " + updatedQuantity + "WHERE ItemID= " + purchasedProduct[0].itemID, function(err, result){
			if(err){
				console.log(err);
			}
			console.log("Your order has been processed. Thank you for shopping at Bamazon");
			connection.end();
			})
		};
	})
});

