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
