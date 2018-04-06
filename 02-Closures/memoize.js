function memoize(algo){
	var cache = {};
	return function(n){
		if (typeof cache[n] !== 'undefined')
			return cache[n];
        console.log('processing ', n);
		cache[n] = algo(n);
		return cache[n];
    };
}

var isOddOrEven = memoize(function(n){
	return n % 2 === 0 ? 'even' : 'odd';
});

var isPrime = memoize(function(n){
	for(var i = 2; i <= (n/2); i++)
        if (n % i === 0)
            return false;
    return true;
});