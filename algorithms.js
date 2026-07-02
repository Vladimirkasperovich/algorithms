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

/*
 * Задача 10
 * Реализовать chunk.
 *
 * Разбить массив
 * на части size.
 */

function chunk(arr, size) {
  if (!arr.length) return [];
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// console.log(chunk([1, 2, 3, 4], 2)); // [[1,2],[3,4]]
// console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]
// console.log(chunk([], 2)); // []
// console.log(chunk([1], 1)); // [[1]]
// console.log(chunk([1, 2], 5)); // [[1,2]]

/*
 * Задача 11
 * Найти все уникальные значения массива.
 *
 * Только те,
 * которые встречаются один раз.
 */

function uniqueValues(arr) {
  const count = new Map();
  const uniques = [];
  for (const elem of arr) {
    count.set(elem, (count.get(elem) || 0) + 1);
  }
  for (const [key, value] of count) {
    if (value === 1) uniques.push(key);
  }
  return uniques;
}

// console.log(uniqueValues([1, 2, 2, 3, 4, 4])); // [1,3]
// console.log(uniqueValues([1, 1, 1])); // []
// console.log(uniqueValues([])); // []
// console.log(uniqueValues(['a', 'b', 'a', 'c'])); // ['b','c']
// console.log(uniqueValues([true, false, true])); // [false]

/*
 * Задача 12
 * Реализовать flatten.
 *
 * Без flat().
 */

function flattenArr(arr) {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArr(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

// console.log(flattenArr([1, [2, [3]]])); // [1,2,3]
// console.log(flattenArr([])); // []
// console.log(flattenArr([1, 2, 3])); // [1,2,3]
// console.log(flattenArr([[[]]])); // []
// console.log(flattenArr([1, [2], 3])); // [1,2,3]

/*
 * Задача 13
 * Найти longest word.
 */

function longestWord(str) {
  if (!str.length) return '';
  const words = str.split(' ');
  let longest = '';
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

// console.log(longestWord('I love JavaScript')); // 'JavaScript'
// console.log(longestWord('hello world')); // 'hello'
// console.log(longestWord('')); // ''
// console.log(longestWord('a ab abc')); // 'abc'
// console.log(longestWord('one two three')); // 'three'

/*
 * Задача 14
 * Проверить,
 * сбалансированы ли скобки.
 */

function validParentheses(str) {
  if (!str.length) return true;
  const map = { '(': ')', '[': ']', '{': '}' };
  const stack = [];
  for (const bracket of str) {
    if (map[bracket]) {
      stack.push(bracket);
    } else {
      const last = stack.pop();
      if (map[last] !== bracket) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// console.log(validParentheses('()')); // true
// console.log(validParentheses('(())')); // true
// console.log(validParentheses('(()')); // false
// console.log(validParentheses('())(')); // false
// console.log(validParentheses('')); // true

/*
 * Задача 15
 * Дан массив чисел.
 *
 * Нужно вернуть элемент,
 * который встречается чаще всего.
 *
 * Если несколько элементов имеют
 * одинаковую максимальную частоту —
 * вернуть тот, который встретился раньше.
 */

function mostCommonNumber(arr) {
  if (!arr.length) return null;
  if (arr.length === 1) return arr[0];

  const map = new Map();
  for (const key of arr) {
    map.set(key, (map.get(key) || 0) + 1);
  }

  const maxValue = Math.max(...map.values());
  return map.entries().find(([_, value]) => value === maxValue)[0] ?? null;
}

// console.log(mostCommonNumber([1, 2, 2, 3])); // 2
// console.log(mostCommonNumber([4, 4, 5, 5])); // 4
// console.log(mostCommonNumber([7])); // 7
// console.log(mostCommonNumber([])); // null

/*
 * Задача 16
 *
 * Напиши функцию,
 * которая переворачивает
 * порядок слов в предложении.
 *
 * Слова должны остаться целыми.
 */

function reverseSentenceWords(str) {
  let arr = str.split(' ');
  if (arr.length === 1) return arr[0];
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result.join(' ');
}

// console.log(reverseSentenceWords('I love JavaScript'));
// // 'JavaScript love I'
//
// console.log(reverseSentenceWords('Hello world'));
// // 'world Hello'
//
// console.log(reverseSentenceWords('one'));
// // 'one'

/*
 * Задача 17
 *
 * Дан массив чисел.
 *
 * Нужно вернуть true,
 * если все элементы уникальны.
 */

function hasOnlyUniqueNumbers(arr) {
  if (!arr.length || arr.length === 1) return true;
  const set = new Set();
  for (const item of arr) {
    if (set.has(item)) return false;
    set.add(item);
  }

  return true;
}

// console.log(hasOnlyUniqueNumbers([1, 2, 3])); // true
// console.log(hasOnlyUniqueNumbers([1, 2, 2])); // false
// console.log(hasOnlyUniqueNumbers([])); // true
// console.log(hasOnlyUniqueNumbers([5])); // true

/*
 * Задача 18
 *
 * Напиши функцию,
 * которая возвращает
 * количество слов в строке.
 *
 * Лишние пробелы учитывать не нужно.
 */

function countWordsInString(str) {
  return str.split(' ').filter((v) => v !== '').length;
}

console.log(countWordsInString('Hello world')); // 2
console.log(countWordsInString('  I   love JS  ')); // 3
console.log(countWordsInString('')); // 0
console.log(countWordsInString('one')); // 1

/*
 * Задача 19
 *
 * Дан массив чисел.
 *
 * Вернуть новый массив,
 * содержащий только четные числа.
 */

function filterEvenNumbers(arr) {}

// console.log(filterEvenNumbers([1, 2, 3, 4])); // [2,4]
// console.log(filterEvenNumbers([1, 3, 5])); // []
// console.log(filterEvenNumbers([])); // []
// console.log(filterEvenNumbers([8, 10])); // [8,10]

/*
 * Задача 20
 *
 * Напиши функцию,
 * которая определяет,
 * является ли одна строка
 * циклическим сдвигом другой.
 */

function isShiftedString(str1, str2) {}

// console.log(isShiftedString('abcde', 'cdeab')); // true
// console.log(isShiftedString('water', 'terwa')); // true
// console.log(isShiftedString('hello', 'llohe')); // true
// console.log(isShiftedString('abc', 'acb')); // false

/*
 * Задача 21
 *
 * Дан массив чисел.
 *
 * Нужно вернуть сумму
 * всех уникальных элементов.
 *
 * Уникальными считаются элементы,
 * которые встретились ровно один раз.
 */

function sumUniqueNumbers(arr) {}

// console.log(sumUniqueNumbers([1, 2, 2, 3])); // 4
// console.log(sumUniqueNumbers([5, 5, 5])); // 0
// console.log(sumUniqueNumbers([1, 2, 3])); // 6
// console.log(sumUniqueNumbers([])); // 0

/*
 * Задача 22
 *
 * Напиши функцию,
 * которая возвращает
 * максимальную длину серии
 * одинаковых подряд идущих символов.
 */

function longestSequence(str) {}

// console.log(longestSequence('aaabbccccdaa')); // 4
// console.log(longestSequence('abcd')); // 1
// console.log(longestSequence('')); // 0
// console.log(longestSequence('wwwwww')); // 6

/*
 * Задача 23
 *
 * Дан массив чисел.
 *
 * Нужно вернуть массив,
 * отсортированный по частоте элементов.
 *
 * Чем чаще встречается число,
 * тем раньше оно должно находиться.
 */

function sortByOccurrences(arr) {}

// console.log(sortByOccurrences([1, 1, 2, 3, 3, 3]));
// // [3,3,3,1,1,2]
//
// console.log(sortByOccurrences([4, 5, 5, 4, 4]));
// // [4,4,4,5,5]
//
// console.log(sortByOccurrences([]));
// // []

/*
 * Задача 24
 *
 * Напиши функцию,
 * которая проверяет,
 * являются ли две строки
 * изоморфными.
 *
 * Каждый символ первой строки
 * должен соответствовать только
 * одному символу второй строки.
 */

function areIsomorphicStrings(str1, str2) {}

// console.log(areIsomorphicStrings('egg', 'add')); // true
// console.log(areIsomorphicStrings('foo', 'bar')); // false
// console.log(areIsomorphicStrings('paper', 'title')); // true
// console.log(areIsomorphicStrings('ab', 'aa')); // false
