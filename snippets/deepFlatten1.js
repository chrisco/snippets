// https://codetuts.tech/flatten-deep-nested-array-object/#othersolutions
function deepFlatten1(arr) {
  return arr.reduce((explored, toExplore) => explored
    .concat(Array.isArray(toExplore) ? deepFlatten1(toExplore) : toExplore), []);
}
