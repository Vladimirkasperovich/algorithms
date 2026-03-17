'use strict';

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  if (nums.length < 2) return [];
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const diff = target - current;
    if (map.has(diff)) return [map.get(diff), i];
    map.set(current, i);
  }
  return [];
};
// console.log(twoSum([2, 7, 11, 15], 9)); //[0, 1]
// console.log(twoSum([3, 2, 4], 6)); //[1, 2]
// console.log(twoSum([3, 3], 6)); //[0, 1]

// const createCounter = (n) => {
//   return () => n++;
// };
// const counter = createCounter(0);
// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter()); // 2

// const createCounter = (init, step) => {
//   let calls = 0;
//   return () => {
//     calls += 1;
//     if (calls === 1) {
//       return init;
//     } else {
//       return (init += step);
//     }
//   };
// };
// const counter = createCounter(10, 5);
//
// console.log(counter()); // 10
// console.log(counter()); // 15
// console.log(counter()); // 20
