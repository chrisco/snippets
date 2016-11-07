function swapNum(n1, n2) {
  console.log(`Before swap: n1: ${n1}, n2: ${n2}`);
  [n2, n1] = [n1, n2];
  console.log(`After swap n1: ${n1}, n2: ${n2}`);
}

console.log(swapNum(1, 2));
