/**
 * Sums the fibonacci numbers from 1 to the largest fibonacci number below n
 * @param {number} n The upper limit
 * @returns {number} The sum
 * @example
 * const n = 100;
 * sumFibsBelow(n) // 44
 */
function sumFibsBelow(n) {
  const fibs = [1, 1];
  let evens = [];

  for (let i = 1; fibs[i] < n; i++) {
    fibs.push(fibs[i - 1] + fibs[i]);
  }
  fibs.pop();

  evens = fibs.filter(x => x % 2 === 0);

  return evens.reduce((a, b) => a + b, 0);
}
