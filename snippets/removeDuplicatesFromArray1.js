/**
 * Removes duplicates from an array
 * @param {array} arr An array with duplicates
 * @returns {array} The array wthout dublicates (i.e., a Set)
 * @example
 * const arr = [1, 2, 3, 3, 4, 5, 5];
 * console.log(deDupe1(arr)); // [1, 2, 3, 4, 5]
 */
function deDupe1(arr) {
  return new Set(arr);
}
