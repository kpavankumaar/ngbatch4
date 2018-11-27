// IIFE
(function(global){
	var num = 20;
	console.log(this);	
	global.a = num;
})(window)
// closure
function doc(heading){
	var c =20;
	return function(content){
		console.log(heading , content);
	}
}
var article  = doc('Elections in Telangana');
console.log(article);
article('all parties are preparing for elections');
