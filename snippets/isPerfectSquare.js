/**
 * Tests whether a number is a perfect square or not
 * @param {number} n The number to test
 * @returns {boolean} true if the number is a perfect square, else false
 * @example
 * const n1 = 4;
 * const n2 = 5;
 * isPerfectSquare(n1) // true
 * isPerfectSquare(n2) // false
 */
function isPerfectSquare(n) {
  return (Math.sqrt(n) === Math.floor(Math.sqrt(n)));
}
