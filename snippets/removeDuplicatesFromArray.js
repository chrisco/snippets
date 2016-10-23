"use strict";

// Pass array to the new Set constructor:
let myArray1 = [1, 2, 3, 3, 4, 5, 5];

function dedupe1(array) {
	return new Set(array);
}

console.log(dedupe1(myArray1));

// Do it with a for-of loop:
let myArray2 = [1, 2, 3, 3, 4, 4, 5];

function dedupe2(array) {
	const result = new Set();
	for (let item of array) {
		result.add(item);
	}
	return result;
}

console.log(dedupe2(myArray2));
