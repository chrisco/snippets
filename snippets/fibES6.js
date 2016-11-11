// V8, modern JavaScript, and beyond - Google I/O 2016
// https://youtu.be/N1swY14jiKc?t=19m3s

let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0;
    let cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return {done: false, value: cur};
      }
    };
  }
};

for (var n of fibonacci) {
  if (n > 1000)
    break;
  console.log(n);
}
