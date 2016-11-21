const x = [1, 2, [1, 2, 3, [1, 2]]];

function fun(arr) {
  const flattened = deepFlatten1(arr);
  return flattened.reduce((a, b) => a + b, 0);
}

// Or use one of the other deepFlatten functions (or lodash's)
function deepFlatten1(arr) {
  return arr.reduce((explored, toExplore) => explored
    .concat(Array.isArray(toExplore) ? deepFlatten1(toExplore) : toExplore), []);
}

fun(x);
