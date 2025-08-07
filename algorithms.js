'use strict';
function deepClone(obj) {
  if (obj === null) return obj;
  if (obj && typeof obj === 'object' && Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  const result = {};
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      result[key] = deepClone(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}

// const source = { a: 1, b: { c: 2 } };
// const copy = deepClone(source);
// console.log(copy); // { a: 1, b: { c: 2 } }
// console.log(copy === source); // false
// console.log(copy.b === source.b); // false
