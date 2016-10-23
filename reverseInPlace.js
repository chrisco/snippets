/**
 * Reverses the words in a string.
 * @param {string} words A string of words
 * @returns {string} The same string of words, except each word is now reversed.
 * @example
 * var words = 'See spot run';
 * console.log(reverseInPlace(words)); // eeS tops nur
 */
function reverseInPlace(words) {
  const origWordsArr = words.split(' ');
  const newWordsArr = origWordsArr.map(word => word.split('').reverse().join(''));
  return newWordsArr.join(' ');
}
