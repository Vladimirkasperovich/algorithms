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
  return str.split('').reduce((acc, cur) => {
    if (/[aeioeuy]/g.test(cur)) acc += 1;
    return acc;
  }, 0);
};
// console.log(findVowelsLength('akksjai')); //3

const getValueFromObj = (obj, path) => {
  const arr = path.split('.');
  let current = obj;
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    if (!current) {
      return undefined;
    } else {
      current = current[key];
    }
  }
  return current;
};

// const obj = {
//   value: {
//     bar: 100,
//   },
// };
//
// console.log(getValueFromObj(obj, 'value.bar')); //100

/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = (functions) => {
  return (...args) => {
    return functions.reduceRight(
      (acc, cur) => {
        acc = cur(acc);
        return acc;
      },
      ...args,
    );
  };
};

// const fn = compose([(x) => x + 1, (x) => 2 * x]);
// console.log(fn(4)); // 9

/**
 * @param {Function} fn
 * @return {Function}
 */
const once = function (fn) {
  let callsCount = 0;
  return function (...args) {
    callsCount += 1;
    if (callsCount === 1) return fn(...args);
    return undefined;
  };
};

// let fn = (a, b, c) => a + b + c;
// let onceFn = once(fn);
//
// console.log(onceFn(1, 2, 3)); // 6
// console.log(onceFn(2, 3, 6)); // returns undefined without calling fn

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async (promise1, promise2) => {
  const result = await Promise.all([promise1, promise2]);
  const response = (await result[0]) + (await result[1]);
  return response;
};

// addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
const cancellable = (fn, args, t) => {
  const cancelId = setTimeout(() => fn(...args), t);
  const cancelFn = () => {
    clearTimeout(cancelId);
  };
  return cancelFn;
};

// const result = [];
//
// const fn = (x) => x * 5;
// const args = [2],
//   t = 20,
//   cancelTimeMs = 50;
//
// const start = performance.now();
//
// const log = (...argsArr) => {
//   const diff = Math.floor(performance.now() - start);
//   result.push({ time: diff, returned: fn(...argsArr) });
// };

/**
 * @param {string} val
 * @return {Object}
 */
const expect = (val) => {
  function toBe(n) {
    if (n === val) {
      return true;
    } else {
      throw new Error('Not Equal');
    }
  }
  function notToBe(n) {
    if (n !== val) {
      return true;
    } else {
      throw new Error('Equal');
    }
  }
  return { toBe, notToBe };
};

// console.log(expect(5).toBe(5)); // true
// console.log(expect(5).notToBe(5)); // throws "Equal"

const createCounter = (init) => {
  let value = init;
  const increment = () => {
    return (value += 1);
  };
  const reset = () => {
    return (value = init);
  };
  const decrement = () => {
    return (value -= 1);
  };
  return { increment, reset, decrement };
};

// const counter = createCounter(5);
// console.log(counter.increment()); // 6
// console.log(counter.reset()); // 5
// console.log(counter.decrement()); // 4

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = (arr, fn) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i], i, arr));
  }
  return res;
};
// console.log(map([1, 2, 3], (n) => n + 1));

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = (arr, fn) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};

// console.log(filter([1, 1, 1, 2, 3, 4, 5], (n) => n === 1));

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = (nums, fn, init) => {
  let acc = init;
  for (let i = 0; i < nums.length; i++) {
    acc = fn(acc, nums[i], i, nums);
  }
  return acc;
};

// console.log(reduce([1, 2, 3, 4], (acc, cur) => acc + cur, 0));
// console.log(
//   reduce(
//     [1, 2, 3, 4],
//     function sum(accum, curr) {
//       return accum + curr * curr;
//     },
//     100,
//   ),
// );

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize1(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (!cache.has(key)) {
      cache.set(key, fn(...args));
    }
    const res = cache.get(key);
    return res;
  };
}

// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//   callCount += 1;
//   return a + b;
// });
// console.log(memoizedFn(2, 3)); // 5
// console.log(memoizedFn(2, 3)); // 5
// console.log(callCount); // 1

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
const cancellableInterval = (fn, args, t) => {
  const result = [];
  let time = 0;

  const calledFn = fn(...args);
  result.push({ time: 0, returned: calledFn });

  const intervalID = setInterval(() => {
    time += t;
    const returnedFn = fn(...args);
    result.push({ time: t, returnedFn });
  }, t);

  const cancelFn = () => {
    clearInterval(intervalID);
  };

  return cancelFn;
};
// const fn = (x) => x * 2;
// const args = [4];
// const t = 35;
// const cancelTimeMs = 190;
//
// const cancelFn = cancellableInterval(fn, args, t);
// console.log(cancelFn);
// setTimeout(cancelFn, cancelTimeMs);

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
const timeLimit = (fn, t) => {
  return async function (...args) {
    try {
      const res = await Promise.race([
        fn(...args),
        new Promise((_, reject) =>
          setTimeout(() => reject('Time Limit Exceeded'), t),
        ),
      ]);
      return Promise.resolve(res);
    } catch (error) {
      return Promise.reject(error);
    }
  };
};

// const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
// limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
const debounce = (fn, t) => {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

// const log = debounce(console.log, 100);
// console.log(log('Hello')); // cancelled
// console.log(log('Hello')); // cancelled
// console.log(log('Hello')); // Logged at t=100ms

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
const promiseAll1 = (functions) => {
  const result = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < functions.length; i++) {
      const fn = Promise.resolve(functions[i]());
      fn.then((res) => {
        count += 1;
        result[i] = res;
        if (count === functions.length) {
          resolve(result);
        }
      }).catch(reject);
    }
  });
};

// const promise = promiseAll1([() => new Promise((res) => res(42))]);
// promise.then(console.log); // [42]

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
const chunk = (arr, size) => {
  if (!arr.length) return arr;
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    result.push(chunk);
  }
  return result;
};
// console.log(chunk([1, 2, 3, 4, 5], 1)); //[[1],[2],[3],[4],[5]]
// console.log(chunk([1, 9, 6, 3, 2], 3)); //[[1,9,6],[3,2]]
// console.log(chunk([8, 5, 3, 2, 6], 6)); //[[8,5,3,2,6]]
// console.log(chunk([], 1)); //[]

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  const arr = this;
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const key = fn(current);
    if (!obj[key]) {
      obj[key] = [current];
    } else {
      obj[key].push(current);
    }
  }
  return obj;
};

// console.log([1, 2, 3].groupBy(String)); // {"1":[1],"2":[2],"3":[3]}
// console.log(
//   [{ id: '1' }, { id: '1' }, { id: '2' }].groupBy(function (item) {
//     return item.id;
//   }),
// ); //{"1":[{"id":"1"},{"id":"1"}],"2":[{"id":"2"}]}

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
const sortBy = (arr, fn) => {
  return arr.sort((a, b) => {
    const A = fn(a);
    const B = fn(b);
    return A - B;
  });
};

// console.log(sortBy([5, 4, 1, 2, 3], (x) => x)); //[1, 2, 3, 4, 5]
// console.log(sortBy([{ x: 1 }, { x: 0 }, { x: -1 }], (d) => d.x)); //[{"x": -1}, {"x": 0}, {"x": 1}]
// console.log(sortBy(
//     [
//       [3, 4],
//       [5, 2],
//       [10, 1],
//     ],
//     (x) => x[1],
//   ),
// ); //[[10, 1], [5, 2], [3, 4]]

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
const join = (arr1, arr2) => {
  const map = new Map();
  for (const item of arr1) {
    if (!map.has(item.id)) {
      map.set(item.id, item);
    }
  }
  for (const item of arr2) {
    if (map.has(item.id)) {
      const saved = map.get(item.id);
      map.delete(item.id);
      map.set(item.id, { ...saved, ...item });
    } else {
      map.set(item.id, item);
    }
  }
  return [...map.values()].sort((a, b) => a.id - b.id);
};
// console.log(
//   join(
//     [
//       { id: 1, x: 1 },
//       { id: 2, x: 9 },
//     ],
//     [{ id: 3, x: 5 }],
//   ),
// ); //[{"id": 1, "x": 1},{"id": 2, "x": 9},{"id": 3, "x": 5}]
// console.log(
//   join(
//     [
//       { id: 1, x: 2, y: 3 },
//       { id: 2, x: 3, y: 6 },
//     ],
//     [
//       { id: 2, x: 10, y: 20 },
//       { id: 3, x: 0, y: 0 },
//     ],
//   ),
// ); //[{"id": 1, "x": 2, "y": 3},{"id": 2, "x": 10, "y": 20},{"id": 3, "x": 0, "y": 0}]
// console.log(
//   join(
//     [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }],
//     [
//       {
//         id: 1,
//         b: { c: 84 },
//         v: [1, 3],
//       },
//     ],
//   ),
// ); //[{"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48} ]

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
const flat = (arr, n) => {
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item) && n > 0) {
      result.push(...flat(item, n - 1));
    } else {
      result.push(item);
    }
  }
  return result;
};
// console.log(
//   flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0),
// ); //[1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// console.log(
//   flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1),
// ); //[1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
// console.log(
//   flat(
//     [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, [9, 10, 11], 12],
//       [13, 14, 15],
//     ],
//     2,
//   ),
// ); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
const compactObject = (obj) => {
  if (
    (typeof obj === 'number' && obj) ||
    (typeof obj === 'string' && obj) ||
    (typeof obj === 'boolean' && obj)
  ) {
    return obj;
  }
  if (obj && typeof obj === 'object' && Array.isArray(obj)) {
    const res = [];
    for (const item of obj) {
      const compact = compactObject(item);
      if (compact) {
        res.push(compact);
      }
    }
    return res;
  }
  if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
    const result = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const compact = compactObject(obj[key]);
        if (compact) {
          result[key] = compact;
        }
      }
    }
    return result;
  }
};
// console.log(compactObject([null, 0, false, 1])); //[1]
// console.log(compactObject({ a: null, b: [false, 1] })); //{"b": [1]}
// console.log(compactObject([null, 0, 5, [0], [false, 16]])); //[5, [], [16]]

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
  const filtered = s
    .split('')
    .filter((v) => /[aeiou]/gi.test(v))
    .reverse();
  let vowelsCount = 0;
  let result = '';
  for (const char of s) {
    if (!/[aeiou]/gi.test(char)) {
      result += char;
    } else {
      result += filtered[vowelsCount++];
    }
  }
  return result;
};
// console.log(reverseVowels('IceCreAm')); //"AceCreIm"
// console.log(reverseVowels('leetcode')); //"leotcede"
// console.log(reverseVowels('Yo! Bottoms up, U.S. Motto, boy!')); //"Yo! Bottoms Up, u.S. Motto, boy!"

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
  return s
    .trim()
    .split(' ')
    .reverse()
    .filter((v) => v)
    .join(' ');
};
// console.log(reverseWords('the sky is blue')); //"blue is sky the"
// console.log(reverseWords('  hello world  ')); //"world hello"
// console.log(reverseWords('a good   example')); //"example good a"

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies, extraCandies) => {
  const max = Math.max(...candies);
  const result = [];
  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= max);
  }
  return result;
};
// console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); //[true,true,true,false,true]
// console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); //[true,false,false,false,false]
// console.log(kidsWithCandies([12, 1, 12], 10)); //[true,false,true]

const multiply = (a) => {
  if (a === undefined) return 1;

  let res = a;

  const inner = (b) => {
    if (b === undefined) return res;
    res *= b;
    return inner;
  };

  return inner;
};

// // Тесты
// console.log(multiply(2)(3)(), '6'); // 6
// console.log(multiply(), '1'); // 1
// console.log(multiply(2)(), '2'); // 2
// console.log(multiply(2)(0)(), '0'); // 0
// console.log(multiply(0)(2)(), '0'); // 0

const serializeElementFrequencies = (arr) => {
  return arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
};
// console.log(serializeElementFrequencies([1, 2, 3, 4, 4])); // {'1:1, 2:1, 3:1, 4:2'}

const shuffleArray = (arr) => {
  return [...arr].sort(() => Math.random() - 0.5);
};
// console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7]));

// Написать функцию чанк, которая принимает массив и какое-то
// кол-во элементов должно быть в чанке.
// Далее функция возвращает массив с массивами, как в комментах

function splitIntoChunks(arr, num) {
  // Ваш код здесь
  const result = [];
  for (let i = 0; i < arr.length; i += num) {
    const chunk = arr.slice(i, i + num);
    result.push(chunk);
  }
  return result;
}

// console.log(splitIntoChunks([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // [[1,2,3],[4,5,6],[7,8,9]]
// console.log(splitIntoChunks([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)); // [[1,2,3,4],[5,6,7,8],[9]]
// console.log(splitIntoChunks([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)); // [[1,2],[3,4],[5,6],[7,8],[9]]

// вернуть массив уникальных чисел

const getUniqDigits = (arr) => {
  const filteredArray = arr.map(Number).filter((item) => !isNaN(item));
  return [...new Set(filteredArray)].sort((a, b) => a - b);
};

// console.log(getUniqDigits(['a',0,4,'4','0',5,'d',7,0,'8',7,10,'s',1,3,'9',10,3,1,9,'u',6,5,'2'])); // output [0,1,2,3,4,5,6,7,8,9,10]`

/*
Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве. Если таких строк несколько, то нужно вернуть первую, идя слева на право.
*/

function highestFrequency(array) {
  const map = new Map();
  array.forEach((item) => {
    map.set(item, (map.get(item) || 0) + 1);
  });
  const max = Math.max(...map.values());
  return [...map.entries()].find((item) => item[1] === max)[0];
}

// console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])); // -> c
// console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])); // -> abc
// console.log(highestFrequency(['abc', 'def'])); // -> abc
// console.log(
//   highestFrequency([
//     'abc',
//     'abc',
//     'def',
//     'def',
//     'def',
//     'ghi',
//     'ghi',
//     'ghi',
//     'ghi',
//   ]),
// ); // -> ghi

// написать функцию которая принимает массив значений и выводит массив уникальных элементов, отсортированных по частоте

const sortByFrequencyWithOrder = (arr) => {
  // Ваш код
  const map = new Map();
  arr.forEach((item) => {
    map.set(item, (map.get(item) || 0) + 1);
  });
  return [...map.entries()].sort((a, b) => b[1] - a[1]).map((item) => item[0]);
};

// console.log(sortByFrequencyWithOrder([1, 1, 1, 2, 2, 2, 2, 4, 4, 5, 0])); // [2,1,4,5,0]
