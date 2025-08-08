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

function debounce(fn, delay) {
  let timeoutID = null;
  return () => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      fn();
    }, delay);
  };
}

// const debounced = debounce(() => console.log('Called!'), 1000);
// console.log(debounced());
// console.log(debounced());
// console.log(debounced());

function flatten(arr) {
  const result = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  });

  return result;
}

// console.log(flatten([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]

function myBind(fn, context, ...args1) {
  // your code
  return function (...args2) {
    return fn.apply(context, [...args1, ...args2]);
  };
}

function greet(greeting, name) {
  return `${greeting}, ${name}!`;
}

// const bound = myBind(greet, null, 'Hello');
// console.log(bound('John')); // Hello, John!

function intersect(arr1, arr2) {
  const map = new Map();

  arr1.forEach((item) => {
    map.set(item, item);
  });
  const result = [];

  arr2.forEach((item) => {
    if (map.has(item)) {
      result.push(item);
      map.delete(item);
    }
  });

  return result;
}

// console.log(intersect([1, 2, 3], [2, 3, 4])); // [2, 3]

function isBalancedBrackets(str) {
  // твой код
  const map = { '(': ')', '{': '}', '[': ']' };
  const stack = [];
  for (const bracket of str) {
    if (map[bracket]) {
      stack.push(bracket);
    } else {
      const lastBracket = stack.pop();
      if (map[lastBracket] !== bracket) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// console.log(isBalancedBrackets('()[]{}')); // true
// console.log(isBalancedBrackets('([{}])')); // true
// console.log(isBalancedBrackets('(]')); // false
// console.log(isBalancedBrackets('([)]')); // false
// console.log(isBalancedBrackets(']')); // false

function uniqueElements(arr) {
  const map = new Map();
  for (const item of arr) {
    if (!map.has(item)) {
      map.set(item, item);
    }
  }
  return [...map.values()];
}

// console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
// console.log(uniqueElements(['a', 'b', 'a', 'c'])); // ['a', 'b', 'c']
