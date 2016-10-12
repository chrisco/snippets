function recursiveGCD(n1, n2) {
	if (n2 === 0) {
		return n1;
	} else {
		return recursiveGCD(n2, n1 % n2);
	}
}

console.log(recursiveGCD(999, 333));
