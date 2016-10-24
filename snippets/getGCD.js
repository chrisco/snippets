/**
 * Calculates the Greatest Common Divisor (GCD) of two numbers
 * @param {number} n1 The first number
 * @param {number} n2 The second number
 * @returns {number} The GCD of n1 and n2
 * @example
 * const n1 = 12;
 * const n2 = 15;
 * console.log(getGCD(n1, n2)); // 3
 */
function getGCD(n1, n2) {
  let divisor = 2;
  let gcd = 1;

  while (n1 >= divisor && n2 >= divisor) {
    if (n1 % divisor === 0 && n2 % divisor === 0) {
      gcd = divisor;
    }
    divisor += 1;
  }
  return gcd;
}
