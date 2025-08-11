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

function twoSum(nums, target) {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    if (seen[diff] !== undefined) {
      return [seen[diff], i];
    }
    seen[num] = i;
  }
  return [-1, -1];
}

// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // [1, 2]
// console.log(twoSum([3, 3], 6)); // [0, 1]
// console.log(twoSum([1, 2, 3], 7)); // [-1, -1]

function secondLargest(arr) {
  // твой код
  const result = [...new Set(arr)].sort((a, b) => b - a);
  return result.length >= 2 ? result[1] : null;
}

// console.log(secondLargest([1, 3, 2, 4, 5])); // 4
// console.log(secondLargest([5, 5, 5])); // undefined или null
// console.log(secondLargest([10])); // undefined или null

function findDuplicates(arr) {
  const map = {};
  for (const item of arr) {
    map[item] = (map[item] || 0) + 1;
  }
  const maxValue = Math.max(...Object.values(map));
  if (maxValue === 1) return [];

  return Object.entries(map)
    .filter((item) => item[1] === maxValue)
    .map((item) => {
      const num = Number(item[0]);
      return isNaN(num) ? item[0] : num;
    });
}

// console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1])); // [1,2]
// console.log(findDuplicates(['a', 'b', 'a', 'c'])); // ['a']
// console.log(findDuplicates([1, 2, 3])); // []

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const start = [];
  const end = [];

  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    if (current < pivot) {
      start.push(current);
    } else {
      end.push(current);
    }
  }
  return [...quickSort(start), pivot, ...quickSort(end)];
};

// console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));

const isPangram = (str) => {
  const map = new Map();
  for (const char of str.toLowerCase()) {
    if (/[a-z]/g.test(char)) {
      map.set(char, (map.get(char) || 0) + 1);
    }
  }
  return map.size === 26;
};

// console.log(isPangram('The quick brown fox jumps over the lazy dog'));
// // true (английская панграмма, содержит все буквы a–z)
//
// console.log(isPangram('Hello world'));
// // false (не хватает многих букв)
//
// console.log(isPangram('Pack my box with five dozen liquor jugs'));
// // true (английская панграмма)
//
// console.log(isPangram('Sphinx of black quartz, judge my vow'));
// // true (ещё одна английская панграмма)
//
// console.log(
//   isPangram('Съешь же ещё этих мягких французских булок, да выпей чаю'),
// );
// // true (русская панграмма, содержит все буквы русского алфавита)
//
// console.log(isPangram('Привет мир'));
// // false (не хватает букв)
//
// console.log(isPangram(''));
// // false (пустая строка)
//
// console.log(isPangram('ABCDEFGHIJKLMNOPQRSTUVWXYZ'));
// true (все английские буквы, без пробелов и знаков)

/**
 * Напиши функцию groupBy(arr, key), которая сгруппирует массив объектов по значению свойства key.
 */
function groupBy(arr, key) {
  const result = {};
  arr.forEach((u) => {
    const { [key]: keyValue } = u;
    if (!result[keyValue]) {
      result[keyValue] = [u];
    } else {
      result[keyValue].push(u);
    }
  });
  return result;
}

// console.log(
//   groupBy(
//     [
//       { name: 'John', age: 25 },
//       { name: 'Jane', age: 25 },
//       { name: 'Mike', age: 30 },
//     ],
//     'age',
//   ),
// );
// Ожидается: { 25: [ {name:'John', age:25}, {name:'Jane', age:25} ], 30: [ {name:'Mike', age:30} ] }

/**
 * Проверь, является ли строка сбалансированной по скобкам: (), {}, []
 */
function isBalanced(str) {
  const map = { '(': ')', '{': '}', '[': ']' };
  const stack = [];
  for (const bracket of str) {
    if (map[bracket]) {
      stack.push(bracket);
    } else if (Object.values(map).includes(bracket)) {
      const lastElem = stack.pop();
      if (map[lastElem] !== bracket) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// console.log(isBalanced('{[()]}')); // true
// console.log(isBalanced('{[(])}')); // false
// console.log(isBalanced('()[]{}')); // true

/**
 * Реализуй функцию compose(...fns), которая принимает несколько функций
 * и возвращает одну функцию, выполняющую их справа налево.
 */
function compose(...fns) {
  // твой код
  return function (...args) {
    return fns.reduceRight(
      (acc, cur) => {
        acc = cur(acc);
        return acc;
      },
      ...args,
    );
  };
}

// const add2 = (x) => x + 2;
// const mul3 = (x) => x * 3;
//
// console.log(compose(mul3, add2)(5)); // (5 + 2) * 3 = 21

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (!cache.has(key)) {
      cache.set(key, fn(...args));
    }

    const res = cache.get(key);
    return res;
  };
}

// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//   callCount += 1;
//   return a + b;
// });
// console.log(memoizedFn(2, 3)); // 5
// console.log(memoizedFn(2, 3)); // 5
// console.log(callCount); // 1
