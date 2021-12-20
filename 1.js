/*1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.*/


var num = [];
var primes = [];
var n = 2;
while (n <= 100){
	n++;
	num.push(n);
}

while(num.length){
	primes.push(num.shift());
	num = num.filter(
		function(n){
			return n % primes[primes.length-1] != 0
		}
		);

}

console.log(primes);
