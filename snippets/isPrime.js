/**
 * Tests whether a number is prime or not
 * @param {number} num The number to test
 * @returns {boolean} True if the number is prime, else false
 * @example
 * const num1 = 42;
 * console.log(isPrime(num1)); // false
 * const num2 = 29996224275833;
 * console.log(isPrime(num2)); // true
 */
function isPrime(num) {
  let divisor = 2;

  while (divisor < Math.sqrt(num)) {
    if (num % divisor === 0) {
      return false;
    }
    divisor += 1;
  }
  return true;
}
