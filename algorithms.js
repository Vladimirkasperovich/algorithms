'use strict';

/*
 * Задача 1
 * Напиши функцию, которая принимает строку
 * и возвращает первый НЕ повторяющийся символ.
 * Если такого символа нет — вернуть null.
 *
 * Учитывай регистр.
 */

function firstUniqueChar(str) {
  const hashMap = {};
  for (const letter of str) {
    hashMap[letter] = (hashMap[letter] || 0) + 1;
  }
  for (const letter of str) {
    if (hashMap[letter] === 1) return letter;
  }
  return null;
}

// console.log(firstUniqueChar('aabccdeff')); // 'b'
// console.log(firstUniqueChar('aabbcc')); // null
// console.log(firstUniqueChar('JSJavaScript')); // 'v'
// console.log(firstUniqueChar('1122334455a')); // 'a'

/*
 * Задача 2
 * Напиши функцию, которая проверяет,
 * являются ли две строки анаграммами.
 *
 * Игнорировать пробелы и регистр.
 */

function isAnagram(str1, str2) {
  const result1 = str1
    .toLowerCase()
    .replaceAll(' ', '')
    .split('')
    .sort()
    .join('');

  const result2 = str2
    .toLowerCase()
    .replaceAll(' ', '')
    .split('')
    .sort()
    .join('');

  return result1 === result2;
}

// console.log(isAnagram('listen', 'silent')); // true
// console.log(isAnagram('Astronomer', 'Moon starer')); // true
// console.log(isAnagram('hello', 'world')); // false
// console.log(isAnagram('Debit Card', 'Bad Credit')); // true

/*
 * Задача 3
 * Дан массив чисел.
 * Верни массив без дубликатов,
 * сохранив порядок элементов.
 */

function uniqueArray(arr) {
  if (!arr.length) return [];
  const hashMap = new Map();
  for (const item of arr) {
    hashMap.set(item, (hashMap.get(item) || 0) + 1);
  }
  return [...hashMap.keys()];
}

// console.log(uniqueArray([1, 2, 2, 3, 1, 4])); // [1,2,3,4]
// console.log(uniqueArray([5, 5, 5])); // [5]
// console.log(uniqueArray([])); // []
// console.log(uniqueArray([1, 2, 3])); // [1,2,3]

/*
 * Задача 4
 * Напиши функцию, которая "схлопывает" строку.
 *
 * Пример:
 * aaabbc -> a3b2c1
 *
 * Если строка пустая — вернуть пустую строку.
 */

function compressString(str) {
  if (!str.length) return '';

  const map = new Map();
  for (const key of str) {
    map.set(key, (map.get(key) || 0) + 1);
  }

  return [...map].map(([k, v]) => k + v).join('');
}

// console.log(compressString('aaabbc')); // 'a3b2c1'
// console.log(compressString('abcd')); // 'a1b1c1d1'
// console.log(compressString('')); // ''
// console.log(compressString('wwwwaaadex')); // 'w4a3d1e1x1'

/*
 * Задача 5
 * Дан массив чисел и target.
 * Нужно вернуть индексы двух чисел,
 * сумма которых равна target.
 *
 * Гарантируется ровно одно решение.
 */

function twoSum(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const diff = target - num;
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(num, i);
  }
  return null;
}

// console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
// console.log(twoSum([3, 2, 4], 6)); // [1,2]
// console.log(twoSum([3, 3], 6)); // [0,1]
// console.log(twoSum([1, 5, 8, 2], 10)); // [2,3]

/*
 * Задача 6
 * Напиши функцию, которая проверяет,
 * является ли строка палиндромом.
 *
 * Игнорировать пробелы, регистр и спецсимволы.
 */

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

// console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
// console.log(isPalindrome('race a car')); // false
// console.log(isPalindrome('madam')); // true
// console.log(isPalindrome('No lemon, no melon')); // true

/*
 * Задача 8
 * Реализуй функцию debounce.
 *
 * Функция должна вызываться
 * только спустя delay мс после
 * последнего вызова.
 */

function debounce(fn, delay) {
  /* your code */
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

// const log = debounce(() => {
//   console.log('called');
// }, 1000);
//
// log();
// log();
// log();
// log();
// 'called' должен вывестись один раз

/*
 * Задача 1
 * Дан массив строк.
 * Нужно сгруппировать анаграммы.
 *
 * Порядок групп не важен.
 */

function groupAnagrams(arr) {
  if (!arr.length) return [];
  const map = new Map();
  for (const word of arr) {
    const key = word.toLowerCase().split('').sort().join('');
    if (!map.has(key)) {
      map.set(key, [word]);
    } else {
      map.get(key).push(word);
    }
  }
  return [...map.values()];
}

// console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// // [['eat','tea','ate'],['tan','nat'],['bat']]
//
// console.log(groupAnagrams(['abc']));
// // [['abc']]
//
// console.log(groupAnagrams([]));
// // []
//
// console.log(groupAnagrams(['', '']));
// // [['', '']]

/*
 * Задача 4
 * Реализуй flatten для массива.
 *
 * flatten([1,[2,[3]]])
 * -> [1,2,3]
 *
 * Нельзя использовать flat().
 */

function flatten(arr) {
  if (!arr.length) return [];
  const result = [];
  for (const arrElement of arr) {
    if (Array.isArray(arrElement)) {
      result.push(...flatten(arrElement));
    } else {
      result.push(arrElement);
    }
  }
  return result;
}

// console.log(flatten([1, [2, [3, [4]]]]));
// // [1,2,3,4]
//
// console.log(flatten([]));
// // []
//
// console.log(flatten([1, [2], 3]));
// // [1,2,3]

/*
 * Задача 5
 * Дан массив строк.
 * Нужно вернуть top K
 * самых частых элементов.
 *
 * Если частота одинаковая —
 * сортировать по алфавиту.
 */

function topKFrequent(words, k) {
  const map = new Map();
  for (const word of words) {
    map.set(word, (map.get(word) || 0) + 1);
  }
  const sorted = [...map.entries()].sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0].localeCompare(b[0]);
    }
    return b[1] - a[1];
  });
  const result = [];
  for (let i = 0; i < k; i++) {
    const word = sorted[i][0];
    result.push(word);
  }
  return result;
}

// console.log(topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2));
// // ['i','love']
//
// console.log(
//   topKFrequent(
//     ['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'],
//     4,
//   ),
// );
// // ['the','is','sunny','day']
//
// console.log(topKFrequent(['b', 'a', 'c'], 3));

/*
 * Задача 6
 * Реализуй deepClone.
 *
 * Нужно глубоко копировать:
 * - объекты
 * - массивы
 *
 * Без structuredClone.
 */

function deepClone(obj) {
  const result = {};
  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }
  if (typeof obj === 'object' && obj !== null) {
    for (const key in obj) {
      result[key] = deepClone(obj[key]);
    }
  }

  return result;
}

const original = {
  a: 1,
  b: {
    c: 2,
  },
};

// const cloned = deepClone(original);
//
// cloned.b.c = 999;
//
// console.log(original.b.c); // 2
// console.log(cloned.b.c); // 999

/*
 * Задача 7
 * Найти второй по величине элемент массива.
 *
 * Если второго максимального нет — вернуть null.
 */

function secondLargest(arr) {
  const set = new Set(arr);
  if (set.size < 2) return null;
  return [...set].sort((a, b) => b - a)[1];
}

// console.log(secondLargest([1, 2, 3, 4])); // 3
// console.log(secondLargest([10, 10, 9])); // 9
// console.log(secondLargest([5])); // null
// console.log(secondLargest([7, 7, 7])); // null
// console.log(secondLargest([-1, -5, -2])); // -2
// console.log(secondLargest([])); // null
// console.log(secondLargest([1, 2])); // 1

/*
 * Задача 8
 * Найти первый повторяющийся символ.
 *
 * Вернуть сам символ.
 * Если нет — null.
 */

function firstRepeatedChar(str) {
  if (!str.length) return null;
  const seen = new Set();
  for (const char of str) {
    if (seen.has(char)) {
      return char;
    }
    seen.add(char);
  }

  return null;
}

// console.log(firstRepeatedChar('abccba')); // 'c'
// console.log(firstRepeatedChar('abcdef')); // null
// console.log(firstRepeatedChar('aabb')); // 'a'
// console.log(firstRepeatedChar('')); // null
// console.log(firstRepeatedChar('abcdea')); // 'a'

/*
 * Задача 9
 * Найти число,
 * которое встречается чаще всего.
 */

function mostFrequent(arr) {
  if (!arr.length) return null;
  const map = new Map();
  for (const item of arr) {
    map.set(item, (map.get(item) || 0) + 1);
  }
  const max = Math.max(...map.values());
  const entry = [...map].find(([_, value]) => value === max);
  return entry ? entry[0] : null;
}

// console.log(mostFrequent([1, 2, 2, 3])); // 2
// console.log(mostFrequent([1, 1, 2, 2, 2])); // 2
// console.log(mostFrequent(['a', 'b', 'a'])); // 'a'
// console.log(mostFrequent([5])); // 5
// console.log(mostFrequent([])); // null
