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

function isPalindrome(str) {}

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('No lemon, no melon')); // true
