/**
 * Reverses a string
 * @param {string} str The string to be reversed
 * @returns {string} The reveresed string
 * @example
 * const foo = "foo";
 * console.log(reverseString3(foo)); // oof
 */
function reverseString3(str) {
  if (!str || typeof str !== 'string' || str.length < 2) {
    return str;
  }

  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  return reversed;
}
