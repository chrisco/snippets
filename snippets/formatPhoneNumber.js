/**
 * Pretty prints a 10-digit phone number
 * @param {array} arr An array containing 10 items, each an int from 0-9
 * @returns {string} The formatted phone number (i.e., (xxx) xxx-xxxx)
 * @example
 * const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
 * console.log(formatPhoneNumber(arr)); // '(123) 456-7890'
 */
function formatPhoneNumber(arr) {
  const str = arr.join('');
  let formatted = '(xxx) xxx-xxxx';
  for (let i = 0; i < str.length; i++) {
    formatted = formatted.replace('x', str[i]);
  }
  return formatted;
}
