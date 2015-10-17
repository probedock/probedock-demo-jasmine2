/**
 * This is the first System-Under-Test for our demo. It is a 
 * very basic node module, which exposes two functions. They
 * both return a string value. The first function is synchronous,
 * the second one is asynchronous.
 */

exports.doSomething = function() {
	//if (a.x == 3) {};
	return "sweet";
}

exports.doSomethingAsynchronously = function ( done ) {
	setTimeout( function() {
		//if (a.x == 3) {};
		done("cool");
	}, 1000);
}