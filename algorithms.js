'use strict';
const sumRange = (from, to) => {
  let sum = 0;
  for (let i = from; i <= to; i++) {
    sum += i;
  }
  return sum;
};
// Тестовые данные
// console.log(sumRange(1, 5)); // 15
// console.log(sumRange(0, 10)); // 55
// console.log(sumRange(-3, 3)); // 0
const reverseNumber = (num) => {
  const str = num.toString();
  if (!str.startsWith('-')) {
    return +str.split('').reverse().join('');
  }
  let result = '';
  for (let i = str.length - 1; i >= 1; i--) {
    result += str[i];
  }
  return Number(`-${result}`);
};

// console.log(reverseNumber(123)); // 321
// console.log(reverseNumber(-456)); // -654
// console.log(reverseNumber(1000)); // 1
// console.log(reverseNumber(0)); // 0

const findMinMax = (arr) => {
  let min = arr[0];
  let max = arr[0];
  for (const num of arr) {
    if (num < min) {
      min = num;
    } else if (num > max) {
      max = num;
    }
  }

  return { min, max };
};
// Тестовые данные
// console.log(findMinMax([4, 3, 5, 3, 2])); // {min: 2, max: 5}
// console.log(findMinMax([4, 4, 7, 2, 1, 10])); // {min: 1, max: 10}
// console.log(findMinMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // {min: 1, max: 10}

const secondLargest = (arr) => {
  if ([...new Set(arr)].length === 1) return null;
  const sorted = [...arr].sort((a, b) => b - a);
  return sorted[1];
};
// console.log(secondLargest([10, 20, 4, 45, 99])); // 45
// console.log(secondLargest([5, 5, 5])); // null
// console.log(secondLargest([1])); // null
