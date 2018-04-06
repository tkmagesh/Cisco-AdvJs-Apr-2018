var products = [
	{id : 6, name : 'Pen', cost : 50, units : 20, category : 'stationary'},
	{id : 9, name : 'Ten', cost : 70, units : 70, category : 'stationary'},
	{id : 3, name : 'Len', cost : 60, units : 60, category : 'grocery'},
	{id : 5, name : 'Zen', cost : 30, units : 30, category : 'grocery'},
	{id : 1, name : 'Ken', cost : 20, units : 80, category : 'utencil'},
];

//find the sum of product value (cost * units) of stationary products (use filter, map * reduce)

var stationaryProducts = products.filter(function(product){
	return product.category === 'stationary';
})

var productsWithDiscount = products.map(function(product){
	return { 
		id : product.id,
		name : product.name,
		cost : product.cost * .9,
		units : product.units,
		category : product.category
    }
})


var numbers = [5,3,6,2]
numbers.reduce(function(n1, n2){
	console.log(arguments);
	return n1 + n2;
})