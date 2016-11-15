/**
 * Reverses a sentence
 * @param {string} words The sentence to be reversed
 * @returns {string} The reveresed sentence
 * @example
 * const foo = 'foo bar';
 * console.log(reverseSentence(foo)); // bar foo
 */
function reverseSentence(words) {
  const wordsArray = words.split(' ');
  const reversedWordsArray = [];

  for (const word of wordsArray) {
    reversedWordsArray.unshift(word);
  }

  return reversedWordsArray.join(' ');
}
