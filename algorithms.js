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
