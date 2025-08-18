'use strict';

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const difference = target - num;
    if (map.has(difference)) {
      return [map.get(difference), i];
    } else {
      map.set(num, i);
    }
  }
  return [];
};

// console.log(twoSum([2, 7, 11, 15], 9)); //[0,1]
// console.log(twoSum([3, 2, 4], 6)); //[1,2]
// console.log(twoSum([3, 3], 6)); //[0,1]

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const bracketsMap = { '(': ')', '{': '}', '[': ']' };
  const stack = [];
  for (const bracket of s) {
    if (bracketsMap[bracket]) {
      stack.push(bracket);
    } else {
      const lastRemovedBracket = stack.pop();
      if (bracketsMap[lastRemovedBracket] !== bracket) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

// console.log(isValid('()')); //true
// console.log(isValid('()[]{}')); //true
// console.log(isValid('(]')); //false
// console.log(isValid('([])')); //true
// console.log(isValid('([)]')); //false

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  const map = new Map();
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!map.has(num)) {
      map.set(num, num);
      nums[k] = num;
      k++;
    }
  }
  return k;
};

// console.log(removeDuplicates([1, 1, 2])); //2 [1,2,_]
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); //5 [0,1,2,3,4,_,_,_,_,_]

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num !== val) {
      nums[k++] = num;
    }
  }
  return k;
};

// console.log(removeElement([3, 2, 2, 3], 3)); //2 -> [2,2,_,_]
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); //5 -> [0,1,4,0,3,_,_,_]
