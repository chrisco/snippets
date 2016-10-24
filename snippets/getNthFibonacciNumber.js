/**
 * Calculates the nth Fibonacci number (O(n) time complexity)
 * @param {number} nthFib Which Fibonacci number we want
 * @returns {number} The nthFib Fibonacci number
 * @example
 * const nthFib = 12;
 * console.log(getNthFib(nthFib)); // 144
 */
function getNthFib(nthFib) {
  const fibs = [0, 1];

  if (nthFib <= 2) {
    return 1;
  }

  for (let i = 2; i <= nthFib; i++) {
    fibs[i] = fibs[i - 2] + fibs[i - 1];
  }
  // console.log(fibs);
  return fibs[nthFib];
}

/**
 * Returns the nthFib Fibonacci number (O(2^n) time complexity -- http://stackoverflow.com/a/360773)
 * @param {number} nthFib Which Fibonacci number we want
 * @returns {number} The nthFib Fibonacci number
 * @example
 * const nthFib = 12;
 * console.log(getNthFibRecursive(nthFib)); // 144
 */
function getNthFibRecursive(nthFib) {
  if (nthFib <= 1) {
    return nthFib;
  }
  return getNthFibRecursive(nthFib - 2) + getNthFibRecursive(nthFib - 1);
}
