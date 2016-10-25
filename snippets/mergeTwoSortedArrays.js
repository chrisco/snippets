/**
 * Merge two sorted arrays
 * @param {array} a1 The first array
 * @param {array} a2 The second array
 * @returns {array} A new, merged, array
 * @example
 * const a1 = [1, 3, 5, 7];
 * const a2 = [2, 4, 6, 8];
 * console.log(mergeTwoSortedArrays(a1, a2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
function mergeTwoSortedArrays(a1, a2) {
  const mergedArray = [];
  let a1Elem = a1[0];
  let a2Elem = a2[0];
  let a1Indx = 1;
  let a2Indx = 1;

  while (a1Elem || a2Elem) {
    if ((a1Elem && !a2Elem) || (a1Elem < a2Elem)) {
      mergedArray.push(a1Elem);
      a1Elem = a1[a1Indx++];
    } else {
      mergedArray.push(a2Elem);
      a2Elem = a2[a2Indx++];
    }
  }
  return mergedArray;
}
