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

const createMemory = () => {
  const arr = [];
  return (val) => {
    arr.push(val);
    return arr;
  };
};
// const remember = createMemory();
//
// console.log(remember(1)); // [1]
// console.log(remember(5)); // [1, 5]
// console.log(remember(3)); // [1, 5, 3]
