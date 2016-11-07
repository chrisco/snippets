/**
 * Reverses a string
 * @param {string} str The string to be reversed
 * @returns {string} The reveresed string
 * @example
 * const foo = "foo";
 * console.log(reverseString1(foo)); // oof
 */
function reverseString1(str) {
  return str.split('').reverse().join('');
}
