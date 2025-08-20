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

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) return false;
  const str = x.toString();
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

// console.log(isPalindrome(121)); //true
// console.log(isPalindrome(-121)); //false
// console.log(isPalindrome(10)); //false
// console.log(isPalindrome(100)); //false

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindromeStr = (s) => {
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

// console.log(isPalindromeStr('A man, a plan, a canal: Panama')); //true
// console.log(isPalindromeStr('race a car')); //false
// console.log(isPalindromeStr(' ')); //true
// console.log(isPalindromeStr('0P')); //false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }

  return i === s.length;
};

// console.log(isSubsequence('abc', 'ahbgdc')); //true
// console.log(isSubsequence('axc', 'ahbgdc')); //false

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSumSortedInput = (numbers, target) => {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    const sum = numbers[start] + numbers[end];
    if (sum === target) {
      return [start + 1, end + 1];
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
  return [];
};

// console.log(twoSumSortedInput([2, 7, 11, 15], 9)); //[1,2]
// console.log(twoSumSortedInput([2, 3, 4], 6)); //[1,3]
// console.log(twoSumSortedInput([-1, 0], -1)); //[1,2]

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
  const seen = {};
  for (const item of magazine) {
    seen[item] = (seen[item] || 0) + 1;
  }

  for (const item of ransomNote) {
    if (!seen[item]) {
      return false;
    }
    seen[item]--;
  }
  return true;
};

// console.log(canConstruct('a', 'b')); //false
// console.log(canConstruct('aa', 'ab')); //false
// console.log(canConstruct('aa', 'aab')); //true

const groupActiveUsers = (users) => {
  const activeUsers = users.filter((u) => u.isActive);
  const names = activeUsers.map((u) => u.name);
  const averageAge =
    activeUsers.reduce((acc, cur) => acc + cur.age, 0) / activeUsers.length;
  return { names, averageAge };
};

// const arr = [
//   { name: 'Jon', isActive: true, age: 18 },
//   { name: 'Ban', isActive: false, age: 45 },
//   { name: 'Stive', isActive: true, age: 42 },
//   { name: 'Jon', isActive: true, age: 45 },
// ];
// console.log(groupActiveUsers(arr));

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  if (this.length === 0) return -1;
  return this[this.length - 1];
};

// const arr = [1, 2, 3];
// console.log(arr.last());
/**
 * @param {number} millis
 * @return {Promise}
 */

const sleep = (millis) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(millis);
    }, millis);
  });
};

// let t = Date.now();
// sleep(100).then(() => console.log(Date.now() - t)); // 100

/**
 * @param {Function} fn
 * @return {Function}
 */
const memoize = (fn) => {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (!cache.has(key)) {
      cache.set(key, fn(...args));
    }

    const result = cache.get(key);
    return result;
  };
};

// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//   callCount += 1;
//   return a + b;
// });
// console.log(memoizedFn(2, 3)); // 5
// console.log(memoizedFn(2, 3)); // 5
// console.log(callCount); // 1

function TimeLimitedCache() {
  this.cache = new Map();
}

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const hasKey = this.cache.has(key);
  if (hasKey) {
    clearTimeout(this.cache.get(key).timeoutID);
  }

  this.cache.set(key, {
    value,
    timeoutID: setTimeout(() => this.cache.delete(key), duration),
  });

  return hasKey;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  return this.cache.has(key) ? this.cache.get(key).value : -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

// const timeLimitedCache = new TimeLimitedCache();
// console.log(timeLimitedCache.set(1, 42, 1000)); // false
// console.log(timeLimitedCache.get(1)); // 42
// console.log(timeLimitedCache.count()); // 1

const sortedEvenNumbers = (arr) => {
  const evenSortedArray = arr
    .filter((item) => item % 2 === 0)
    .sort((a, b) => a - b);

  const result = [];
  let evenIndexes = 0;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item % 2 !== 0) {
      result.push(item);
    } else {
      result.push(evenSortedArray[evenIndexes++]);
    }
  }
  return result;
};

// const arr = [1, 2, 11, 4, 23, 5, 6, 9];
// console.log(sortedEvenNumbers(arr));
// Дан массив arr = [1,2,11,4,23,5,6,9]
// Необходимо отсортировать четные числа по форзастанию и оставить их на месте

const progressAnagram = (arr) => {
  const seen = new Map();
  for (const word of arr) {
    const key = word.toLowerCase().split('').sort().join('');
    if (!seen.has(key)) {
      seen.set(key, []);
    } else {
      seen.get(key).push(word);
    }
  }
  const sorted = [...seen.values()].sort((a, b) => a.length - b.length);
  return sorted.flat();
};
// console.log(progressAnagram(['гора', 'раки', 'каир', 'рога', 'ирак', 'игра']));
// Дан массив слов arr = ['гора', 'раки', 'каир', 'рога', 'ирак', 'игра']
// Необходимо найти все слова аннограммы и вернуть массив анаграм по возрастанию от количества повторений

const promiseAll = (promises) => {
  const result = [];
  let resolvedCount = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      const promise = promises[i];
      Promise.resolve(promise)
        .then((data) => {
          resolvedCount += 1;
          result[i] = data;
          if (resolvedCount === promises.length) {
            resolve(result);
          }
        })
        .catch(reject);
    }
  });
};

// const pr1 = new Promise((resolve) => resolve(3));
// const pr2 = new Promise((resolve) => resolve(2));
// const pr3 = new Promise((resolve) => resolve(12));
//
// const resolve = (value, timeout) =>
//   new Promise((res) => setTimeout(res, timeout, value));
//
// const reject = (value, timeout) =>
//   new Promise((_, rej) => setTimeout(rej, timeout, value));
//
// promiseAll([resolve(1, 200), resolve(2, 300), resolve(3, 100)]).then(
//   console.log,
// ); // [2, 3, 1]
//
// promiseAll([reject(1, 100), reject(2, 500), resolve(3, 1000)]).catch(
//   console.error,
// ); // 1

const findVowelsLength = (str) => {
  return [...str].reduce((acc, cur) => {
    if (/[aeioeuy]/g.test(cur)) acc += 1;
    return acc;
  }, 0);
};
console.log(findVowelsLength('akksjai')); //3
