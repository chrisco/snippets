function reverseWords(words) {
  const wordsArray = words.split(' ');
  const reversedWordsArray = [];

  for (const word of wordsArray) {
    reversedWordsArray.unshift(word);
  }

  return reversedWordsArray.join(' ');
}
