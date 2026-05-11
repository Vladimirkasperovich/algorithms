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
