function isPrime(num) {
	let divisor = 2;

	while (divisor < num ^ (1 / 2)) {
		if (num % divisor == 0) {
			return false
		}
		divisor++;
	}

	return true;
}

console.log(isPrime(97));
console.log(isPrime(100));
