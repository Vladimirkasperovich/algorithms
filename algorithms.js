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
const reverseNumber = (num) => {};

console.log(reverseNumber(123)); // 321
console.log(reverseNumber(-456)); // -654
console.log(reverseNumber(1000)); // 1
console.log(reverseNumber(0)); // 0
