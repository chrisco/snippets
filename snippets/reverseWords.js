function reverseWords(words) {
  return words.split(' ').reverse().join(' ');
}
console.log(reverseWords('foo bar'));

function reverseWords2(words) {
  const wordsArray = [];
  let wordLength = 0;

  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i] === ' ' || i === 0) {
      wordsArray.push(words.substr(i, wordLength + 1));
      wordLength = 0;
    } else {
      wordLength++;
    }
  }
  return wordsArray.join(' ');
}
console.log(reverseWords2('bar baz'));
