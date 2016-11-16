/**
 * Gets all fibs below an upper limit (https://youtu.be/N1swY14jiKc?t=18m54s)
 * @param {number} limit The upper limit
 * @returns {array} The fibonacci numbers below the limit
 * @example
 * const limit = 30;
 * console.log(getAllFibsBelow(limit)); // [1, 2, 3, 5, 8, 13, 21]
 */
function getAllFibsBelow(limit) {
  const fibs = [];
  const fibonacci = {
    [Symbol.iterator]() {
      let pre = 0;
      let cur = 1;
      return {
        next() {
          [pre, cur] = [cur, pre + cur];
          return {
            done: false,
            value: cur,
          };
        },
      };
    },
  };

  for (const fib of fibonacci) {
    if (fib > limit) {
      break;
    }
    fibs.push(fib);
  }
  return fibs;
}
