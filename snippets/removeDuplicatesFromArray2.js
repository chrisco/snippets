/**
 * Removes duplicates from an array
 * @param {array} arr An array with duplicates
 * @returns {array} The array wthout dublicates (i.e., a Set)
 * @example
 * const arr = [1, 2, 3, 3, 4, 5, 5];
 * console.log(deDupe2(arr)); // [1, 2, 3, 4, 5]
 */
function deDupe2(arr) {
  const result = new Set();
  for (const item of arr) {
    result.add(item);
  }
  return result;
}
