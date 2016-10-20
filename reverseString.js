"use strict";

function reverseString1(str) {
	return str.split('').reverse().join('');
}
console.log(reverseString1('foo'));

function reverseString2(str) {
	let reversed = '';

	for (let char of str) {
		reversed = char + reversed;
	}

	return reversed;
}
console.log(reverseString2('bar'));

function reverseString3(str) {
	let reversed = [];

	if (!str || typeof str != 'string' || str.length < 2) {
		return str;
	}

	for (let i = str.length - 1; i >= 0; i--) {
		reversed.push(str[i]);
	}

	return reversed.join('');
}
console.log(reverseString2('baz'));
