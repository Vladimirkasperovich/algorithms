function isAnagram(str1, str2) {
  const firstWord = str1.toLowerCase().split('').sort().join('');
  const secondWord = str2.toLowerCase().split('').sort().join('');
  return firstWord === secondWord;
}

// console.log(isAnagram('listen', 'silent')); // true
// console.log(isAnagram('hello', 'world')); // false
// console.log(isAnagram('evil', 'vile')); // true

function hasUniqueChars(str) {
  if (!str.length) return true;
  const seen = new Map();
  for (const sElement of str.toLowerCase()) {
    seen.set(sElement, (seen.get(sElement) || 0) + 1);
  }

  return [...seen.values()].every((value) => value === 1);
}

// console.log(hasUniqueChars('abcdef')); // true
// console.log(hasUniqueChars('aabcde')); // false
// console.log(hasUniqueChars('')); // true

function isBalanced(str) {
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

// console.log(isBalanced('{[()]}')); // true
// console.log(isBalanced('{[(])}')); // false
// console.log(isBalanced('()[]{}')); // true

function flattenArray(arr) {
  if (!arr.length) return arr;
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

// console.log(flattenArray([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]
// console.log(flattenArray([1, [2, 3], 4])); // [1, 2, 3, 4]
// console.log(flattenArray([])); // [1, 2, 3, 4]

function groupBy(arr, key) {
  if (!arr.length) return arr;
  const map = new Map();

  arr.forEach((item) => {
    const { [key]: value } = item;
    if (!map.has(value)) {
      map.set(value, [item]);
    } else {
      map.get(value).push(item);
    }
  });

  return map;
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
// {
//   25: [ {name:'John', age:25}, {name:'Jane', age:25} ],
//   30: [ {name:'Mike', age:30} ]
// }

function compose(...fns) {
  // твой код
  return (...args) => {
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
// console.log(compose(add2, mul3)(5)); // (5 * 3) + 2 = 17
