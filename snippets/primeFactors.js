/**
 * Calculates the prime factors of a number
 * @param {number} num The number whose prime factors we wish to calculate
 * @returns {array} A new, merged, array
 * @example
 * const num = 99;
 * console.log(primeFactors(99)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
function primeFactors(num) {
  const primeFactors = [];
  let divisor = 3;

  while (num > 3) {
    if (num % divisor === 0) {
      primeFactors.push(divisor);
      num = num / divisor;
    } else {
      divisor += 1;
    }
  }
  return primeFactors;
}
