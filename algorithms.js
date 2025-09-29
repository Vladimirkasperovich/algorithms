'use strict';

// Напишите функцию поиска максимального числа
const findMaxNumber = (array) => {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (num > max) max = num;
  }
  return max;
};
// console.log(findMaxNumber([1, 2, 3, 4, 5, 6]));

// Напишите функцию сортировки массива
// (исходный массив должен остаться без изменений)
const getSortedArray = (arr) => {
  if (arr.length < 1) return [...arr];
  const left = [];
  const right = [];
  const pivot = arr[0];
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
