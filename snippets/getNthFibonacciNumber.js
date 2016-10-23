// Returns the nthFib Fibonacci number.

// O(n)
function getNthFib(nthFib) {
	let fibs = [0, 1];

	if (nthFib <= 2) {
		return 1;
	}

	for (let i = 2; i <= nthFib; i++) {
		fibs[i] = fibs[i - 2] + fibs[i - 1];
	}
  // console.log(fibs);
  return fibs[nthFib];
}

console.log(getNthFib(12)); // 144

// O(2^n) http://stackoverflow.com/a/360773
function recursiveGetNthFib(nthFib) {
	if (nthFib <= 1) {
		return nthFib;
	} else {
		return recursiveGetNthFib(nthFib - 2) + recursiveGetNthFib(nthFib - 1);
	}
}

console.log(recursiveGetNthFib(12)); // 144
