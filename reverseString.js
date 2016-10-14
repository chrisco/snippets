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
