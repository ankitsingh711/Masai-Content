// MongoDB Aggregation :

//Decreasing and Increasing order of the data:
// db.orders.aggregate([{$sort:{price:1}}]).pretty();

//Limiting the data in the aggregate manner
// db.orders.aggregate([{$limit:30}])


// db.orders.aggregate([{$limit:4},{$sort:-1}]).pretty()

//Order does matter because it will change the data order according to what you are writing.

//$match : to find something and if find 

// db.orders.aggregate([{$match: {name:"Cheese"}}]).pretty()

// Find all the large size pizzas whose price is less than 20;

// db.orders.aggregate([{$match:{siize:"large", price:{$lt:20}}}]).pretty()

//Find all the pepperoni pizzas, who's price is lte 20.

// All masai studnets - 10,000

// 1. Course wise -> MERN, Node backend, Java backend 
// 2. gender wise -> 
// time -> PT, FT
// city ->
// age ->


//Find all number pf only medium sized pizzas

// db.orders.aggregate([{$match: {size:"medium"}, {$group: {_id: "$name", totalqty: {$sum: "quantity"}}}]).pretty()


// Grouping the data together:
// db.orders.aggregate([{$match: {size:"medium"}}, {$group: {_id: "$size", totqty: {$sum: "quantity"}}}]).pretty()

// Find the state with the largest population :

