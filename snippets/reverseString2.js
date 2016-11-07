/**
 * Reverses a string
 * @param {string} str The string to be reversed
 * @returns {string} The reveresed string
 * @example
 * const foo = "foo";
 * console.log(reverseString2(foo)); // oof
 */
function reverseString2(str) {
  let reversed = '';

  for (const char of str) {
    reversed = char + reversed;
  }

  return reversed;
}
