/**
 * Reverses a string
 * @param {string} str The string to be reversed
 * @returns {string} The reveresed string
 * @example
 * const foo = "foo";
 * console.log(reverseString3(foo)); // oof
 */
function reverseString3(str) {
  const reversed = [];

  if (!str || typeof str !== 'string' || str.length < 2) {
    return str;
  }

  for (let i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i]);
  }

  return reversed.join('');
}
