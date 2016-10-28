/**
 * Removes duplicates from an array
 * @param {array} array An array with duplicates
 * @returns {array} The The array wthout dublicates
 * @example
 * const arr = [1, 2, 3, 3, 4, 5, 5];
 * console.log(deDupe1(arr)); // XXXXXXX
 */
function deDupe1(array) {
  return new Set(array);
}

/**
 * Removes duplicates from an array
 * @param {array} array An array with duplicates
 * @returns {array} The The array wthout dublicates
 * @example
 * const arr = [1, 2, 3, 3, 4, 5, 5];
 * console.log(deDupe2(arr)); // XXXXXXX
 */
function deDupe2(array) {
  const result = new Set();
  for (const item of array) {
    result.add(item);
  }
  return result;
}
