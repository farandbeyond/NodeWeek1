//link to node filesystem library to read files

var fs = require('fs');
//open and read food.txt
var food = fs.readFileSync('food.txt','utf8');

//print title
console.log("FOOD");
//print food file
console.log(food);

//open and read food.txt
var drinks = fs.readFileSync('drinks.txt','utf8');

//print title
console.log("\nDrinks");
//print food file
console.log(drinks);