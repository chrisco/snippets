/**
 * Recursively calculates the Greatest Common Divisor (GCD) of two numbers
 * @param {number} n1 The first number
 * @param {number} n2 The second number
 * @returns {number} The GCD of n1 and n2
 * @example
 * const n1 = 12;
 * const n2 = 15;
 * console.log(getGCD(n1, n2)); // 3
 */
function recursiveGCD(n1, n2) {
  if (n2 === 0) {
    return n1;
  }
  return recursiveGCD(n2, n1 % n2);
}
