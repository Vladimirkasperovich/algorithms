'use strict';

// Напишите функцию поиска максимального числа
const findMaxNumber = (array) => {
  let max = array[0];
  array.forEach((num) => {
    if (num > max) {
      max = num;
    }
  });
  return max;
};
// console.log(findMaxNumber([1, 2, 3, 4, 5, 6]));

// Напишите функцию сортировки массива
// (исходный массив должен остаться без изменений)
const getSortedArray = (arr) => {
  if (arr.length <= 1) return [...arr];
  const left = [];
  const right = [];
  let pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];
    if (num < pivot) {
      left.push(num);
    } else {
      right.push(num);
    }
  }

  return [...getSortedArray(left), pivot, ...getSortedArray(right)];
};
// console.log(getSortedArray([1, 5, 2, 4, 3]));

// Есть задача функция принимает массив чисел,
// необхоимо вернуть массив с наибольшими числами в порядке убывания,
// например принимает[1, 2, 5, 3, 4, 6, 4,] - вернуть[6, 5]

const getTopTwoDescending = (data) => {
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  for (const num of data) {
    if (num > firstMax) {
      secondMax = firstMax;
      firstMax = num;
    } else if (num > secondMax) {
      secondMax = num;
    }
  }

  return [firstMax, secondMax];
};
// console.log(getTopTwoDescending([1, 2, 5, 3, 4, 6, 4]));

function sumPositiveEvenNumbers(arr) {
  // Ваш код здесь
  const evenNumbers = arr.filter((el) => el % 2 === 0 && el > 0);
  return evenNumbers.reduce((acc, cur) => acc + cur, 0);
}

// console.log(sumPositiveEvenNumbers([5, 0, -5, 20, 88, 17, -32])); // 108

//изменить код так, что бы в итоге выводился массив i ([], [1], [1, 1]) (сейчас выводится [1, 1, 1])

function delayedArrayLogging() {
  for (let i = []; i.length < 3; i.push(1)) {
    setTimeout(() => console.log(i), i.length * 1000);
  }
}

// console.log(delayedArrayLogging());

function serializeElementFrequencies(arr) {
  const objectElements = arr.reduce((obj, key) => {
    if (!obj[key]) {
      obj[key] = 1;
    } else {
      obj[key] += 1;
    }
    return obj;
  }, {});
  return Object.entries(objectElements)
    .map(([key, val]) => `${key}:${val}`)
    .join(', ');
}

// console.log(serializeElementFrequencies([1, 2, 3, 4, 4])); // {'1:1, 2:1, 3:1, 4:2'}

// Реализовать функцию, которая будет принимать на вход массив чисел и всегда возвращать
// массив этих же чисел, но каждый раз в рандомном порялке
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7]));

// Написать функцию чанк, которая принимает массив и какое-то
// кол-во элементов должно быть в чанке.
// Далее функция возвращает массив с массивами, как в комментах

function splitIntoChunks(arr, num) {
  // Ваш код здесь
  const result = [];
  for (let i = 0; i < arr.length; i += num) {
    result.push(arr.slice(i, i + num));
  }
  return result;
}

// console.log(splitIntoChunks([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // [[1,2,3],[4,5,6],[7,8,9]]
// console.log(splitIntoChunks([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)); // [[1,2,3,4],[5,6,7,8],[9]]
// console.log(splitIntoChunks([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)); // [[1,2],[3,4],[5,6],[7,8],[9]]

// вернуть массив уникальных чисел
const getUniqDigits = (arr) => {
  const numbers = arr.map(Number);
  const numbersWithoutNan = numbers.filter((el) => !isNaN(el));
  const seenNums = {};
  numbersWithoutNan.forEach((num) => {
    if (!seenNums[num]) {
      seenNums[num] = num;
    }
  });
  return [...Object.values(seenNums)].sort((a, b) => a - b);
};

// console.log(getUniqDigits(['a', 0, 4, '4', '0', 5, 'd', 7, 0, '8', 7, 10])); // output [0,1,2,3,4,5,6,7,8,9,10]`
// console.log(getUniqDigits(['s', 1, 3, '9', 10, 3, 1, 9, 'u', 6, 5, '2'])); // output [0,1,2,3,4,5,6,7,8,9,10]`

/*
Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве. Если таких строк несколько, то нужно вернуть первую, идя слева на право.
*/

function highestFrequency(array) {
  const seenChars = {};
  array.forEach((char) => {
    if (!seenChars[char]) {
      seenChars[char] = 1;
    } else {
      seenChars[char] += 1;
    }
  });
  const max = Math.max(...Object.values(seenChars));
  const result = Object.entries(seenChars).find(([_, value]) => value === max);
  return result[0];
}

// console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])); // -> c
// console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])); // -> abc
// console.log(highestFrequency(['abc', 'def'])); // -> abc
