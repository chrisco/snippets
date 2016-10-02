function primeFactors(num) {
	let primeFactors = [];
	let divisor = 3;

	while (num > 3) {
		console.log("primeFactors: ", primeFactors, "num: ", num, "divisor: ", divisor);
		if (num % divisor == 0) {
			primeFactors.push(divisor)
			num = num / divisor;
		} else {
			divisor++
		}
	}
	return primeFactors;
}

console.log(primeFactors(99));
