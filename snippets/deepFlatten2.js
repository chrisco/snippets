// https://codetuts.tech/flatten-deep-nested-array-object/#othersolutions
const x = [1, 2, [1, 2, 3, [1, 2]]];

function deepFlatten2(nested) {
  // Create a copy of the array
  const flat = [].concat(nested);

  for (let i = 0; i < flat.length; i++) {
    if (Array.isArray(flat[i])) {
      // Replace with the items and backtrack 1 position
      flat.splice(i, 1, ...flat[i--]);
    }
  }
  return flat;
}

deepFlatten2(x);
