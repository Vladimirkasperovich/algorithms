// Необходимо обработать массив таким образом, чтобы распределить людей по группам городов

// Данные на вход
// const people = [
//   {
//     name: 'Alex',
//     city: 'Moscow',
//   },
//   {
//     name: 'Ivan',
//     city: 'Moscow',
//   },
//   {
//     name: 'Sasha',
//     city: 'Moscow',
//   },
//   {
//     name: 'Joe',
//     city: 'New York',
//   },
//   {
//     name: 'Johan',
//     city: 'Berlin',
//   },
// ];

const groupByCity = (array) => {
  const group = {};
  for (const user of array) {
    const key = user.city;
    if (!group[key]) {
      group[key] = user.name;
    } else {
      if (!Array.isArray(group[key])) {
        group[key] = [group[key]];
      }
      group[key].push(user.name);
    }
  }
  return group;
};
// console.log(groupByCity(people));
// Данные на выход
/*
{
  'Moscow': [ 'Alex', 'Ivan' ],
  'New York': 'Joe',
  'Berlin': 'Johan'
}
*/

const array1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]; // [[1, 6], [8, 10], [15, 18]]
const array2 = [
  [1, 4],
  [4, 5],
];
const array3 = [
  [11, 12],
  [2, 3],
  [5, 7],
  [1, 4],
  [8, 10],
  [6, 8],
]; // [[1, 4], [5, 10], [11, 12]]

function merge(intervals) {
  // ваш код
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const last = result[result.length - 1];
    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      result.push(current);
    }
  }
  return result;
}

// console.log(merge(array1));
// console.log(merge(array2));
// console.log(merge(array3));

// const object = {
//   a: {
//     d: {
//       h: 4,
//     },
//     e: 2,
//   },
//   b: 1,
//   c: {
//     f: {
//       g: 3,
//       k: {},
//     },
//   },
// };

const addLevels = (obj, level = 0) => {
  const result = {};
  for (const key in obj) {
    if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      result[key] = addLevels(obj[key], level + 1);
    } else {
      result[key] = obj[key];
    }
  }
  result.level = level;
  return result;
};
// console.log(addLevels(object));
// Данные на выход
/*
updatedObject {
  a: { d: { h: 4, level: 2 }, e: 2, level: 1 },
  b: 1,
  c: { f: { g: 3, k: [Object], level: 2 }, level: 1 },
  level: 0
}*/

// Object { a: { d: { h: 4 }, e: 2 }, b: 1, c: { f: { g: 3, k: {} } } }

/*
Задача: Напишите функцию flattenObject(obj), которая принимает в качестве
аргумента вложенный объект obj и возвращает новый объект,
в котором все свойства объекта obj "разглажены"
(преобразованы в одноуровневую структуру), с использованием точечной нотации
для представления иерархии свойств.
*/

// const obj = {
//   a: {
//     b: {
//       c: 1,
//       d: 2,
//     },
//     e: 3,
//   },
//   f: 4,
// };

const flattenObject = (obj, keys = '') => {
  let result = {};
  for (const key in obj) {
    if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      const nested = flattenObject(obj[key], keys + key + '.');
      result = { ...result, ...nested };
    } else {
      result[keys + key] = obj[key];
    }
  }
  return result;
};

// const flattenedObj = flattenObject(obj);
// console.log(flattenedObj);
// Ожидаемый результат: { 'a.b.c': 1, 'a.b.d': 2, 'a.e': 3, 'f': 4 } || { "f": 4, "a.e": 3, "a.b.c": 1, "a.b.d": 2 }

const isAnagram = (strA, strB) => {
  const firstStr = strA.toLowerCase().split('').sort().join('');
  const secondStr = strB.toLowerCase().split('').sort().join('');
  return firstStr === secondStr;
};

// console.log(isAnagram('finder', 'Friend')); // true
// console.log(isAnagram('hello', 'bye')); // false

function flattenArray(arr) {
  const result = [];
  arr.forEach((num) => {
    if (Array.isArray(num)) {
      result.push(...flattenArray(num));
    } else {
      result.push(num);
    }
  });
  return result;
}

// const nestedArray = [1, [2, [3, 4], 5], 6];
// console.log(flattenArray(nestedArray)); // [1, 2, 3, 4, 5, 6]
const sumRange = (num1, num2) => {
  let sum = 0;
  for (let i = num1; i <= num2; i++) {
    sum += i;
  }
  return sum;
};
// console.log(sumRange(1, 5)); // 15
// console.log(sumRange(0, 10)); // 55
// console.log(sumRange(-3, 3)); // 0

const reverseNumber = (num) => {
  if (!num) return num;
  const str = num.toString();
  let result = str.startsWith('-') ? '-' : '';
  for (let i = str.length - 1; i >= 0; i--) {
    const current = str[i];
    if (/\d/.test(current)) {
      result += current;
    }
  }
  return +result;
};
// console.log(reverseNumber(123)); // 321
// console.log(reverseNumber(-456)); // -654
// console.log(reverseNumber(1000)); // 1
// console.log(reverseNumber(0)); // 0
const findMinMax = (array) => {
  let min = array[0];
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    const currentNum = array[i];
    if (currentNum > max) {
      max = currentNum;
    } else if (currentNum < min) {
      min = currentNum;
    }
  }
  return { min, max };
};
// console.log(findMinMax([4, 3, 5, 3, 2])); // {min: 2, max: 5}
// console.log(findMinMax([4, 4, 7, 2, 1, 10])); // {min: 1, max: 10}
// console.log(findMinMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // {min: 1, max: 10}

const findPairs = (array, target) => {
  const result = [];
  const seenNum = {};
  for (const item of array) {
    const complement = target - item;
    if (seenNum[complement]) {
      result.push([complement, item]);
    } else {
      seenNum[item] = complement;
    }
  }
  return result;
};

// console.log(findPairs([2, 4, 3, 7, 8, 1], 9)); // [[7, 2], [8, 1]]
// console.log(findPairs([1, 2, 3, 4, 5], 10)); // []
// console.log(findPairs([0, -1, -2, 2, 1], 0)); // [[-1, 1], [-2, 2]]

const isPalindrome = (str) => {
  const cleanStr = str.toLowerCase().replace(/[^a-z]/g, '');
  const reversedStr = str
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .split('')
    .reverse()
    .join('');
  return cleanStr === reversedStr;
};
// console.log(isPalindrome('A man, a plan, a canal, Panama!')); // true
// console.log(isPalindrome("No 'x' in Nixon")); // true
// console.log(isPalindrome('Was it a car or a cat I saw?')); // true
// console.log(isPalindrome('Eva, I see bees in a cave')); // false
