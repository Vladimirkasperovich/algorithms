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
