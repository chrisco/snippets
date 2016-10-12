function gcd(n1, n2) {
	let divisor = 2;
	let gcd = 1;

	while (n1 >= divisor && n2 >= divisor) {
		if (n1 % divisor === 0 && n2 % divisor === 0) {
			gcd = divisor;
		}
		// console.log("gcd: ", gcd);
		// console.log("divisor: ", divisor);
		divisor++;
	}
	return gcd;
}

console.log(gcd(333, 999));
