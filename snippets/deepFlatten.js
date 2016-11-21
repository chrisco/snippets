// https://codetuts.tech/flatten-deep-nested-array-object/#othersolutions
const x = [1, 2, [1, 2, 3, [1, 2]]];

const scalar = v => !Array.isArray(v);

const deepFlatten = (deep, flat = []) => {
  if (deep.length === 0) return flat;

  const [head, ...tail] = deep;

  if (scalar(head)) {
    return deepFlatten(tail, flat.concat(head));
  }

  return deepFlatten(tail, flat.concat(deepFlatten(head)));
};

deepFlatten(x);
