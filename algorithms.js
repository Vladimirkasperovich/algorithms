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

const fetchRetryer = (url, count = 5) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((data) => {
        if (data.status === 200) {
          resolve(data);
        } else {
          throw new Error('something went wrong');
        }
      })
      .catch(() => {
        if (count > 0) {
          fetchRetryer(url, count - 1)
            .then(resolve)
            .catch(reject);
        } else {
          reject('calls limit');
        }
      });
  });
};
// 1. Успешный запрос с первого раза
// fetchRetryer('https://good-api.com/data')
//   .then((data) => console.log('Успех:', data))
//   .catch((err) => console.log('Ошибка:', err.message));
//
// // 2. Успешный запрос после 2 неудач
// // (предположим, что сервер первые 2 раза не отвечает, а на 3-й отвечает)
// fetchRetryer('https://unstable-api.com/data')
//   .then((data) => console.log('Успех после повторов:', data))
//   .catch((err) => console.log('Ошибка:', err.message));

const findPairs = (arr, target) => {
  const seen = new Map();
  const result = [];
  for (const num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      result.push([complement, num]);
    } else {
      seen.set(num, num);
    }
  }
  return result;
};

// console.log(findPairs([2, 4, 3, 7, 8, 1], 9)); // [[7, 2], [8, 1]]
// console.log(findPairs([1, 2, 3, 4, 5], 10)); // []
// console.log(findPairs([0, -1, -2, 2, 1], 0)); // [[-1, 1], [-2, 2]]

const isPalindrome = (str) => {
  const cleanedStr = str.toLowerCase().replace(/[^a-z]/g, '');
  let start = 0;
  let end = cleanedStr.length - 1;
  while (start < end) {
    if (cleanedStr[start] !== cleanedStr[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
};

// console.log(isPalindrome('A man, a plan, a canal, Panama!')); // true
// console.log(isPalindrome("No 'x' in Nixon")); // true
// console.log(isPalindrome('Was it a car or a cat I saw?')); // true
// console.log(isPalindrome('Eva, I see bees in a cave')); // false

const isAnagram = (str1, str2) => {
  const firstStr = str1.toLowerCase().split('').sort().join('');
  const secondStr = str2.toLowerCase().split('').sort().join('');
  return firstStr === secondStr;
};

// console.log(isAnagram('finder', 'Friend')); // true
// console.log(isAnagram('hello', 'bye')); // false
// console.log(isAnagram('listen', 'silent')); // true
// console.log(isAnagram('rail safety', 'fairy tales'));

const firstNonRepeatingChar = (str) => {
  const seen = new Map();
  for (const char of str) {
    seen.set(char, (seen.get(char) || 0) + 1);
  }
  const fondedFirstChar = [...seen.entries()].find((item) => item[1] === 1);
  return fondedFirstChar ? fondedFirstChar[0] : null;
};
// console.log(firstNonRepeatingChar('swiss')); // "w"
// console.log(firstNonRepeatingChar('aabbcc')); // null
// console.log(firstNonRepeatingChar('javascript')); // "j"

const countVowelsAndConsonants = (str) => {
  let vowels = 0;
  let consonants = 0;
  for (const char of str.toLowerCase()) {
    if (/[aeiou]/.test(char)) {
      vowels += 1;
    } else if (/[a-z]/.test(char)) {
      consonants += 1;
    }
  }

  return { vowels, consonants };
};

// console.log(countVowelsAndConsonants('hello')); // { vowels: 2, consonants: 3 }
// console.log(countVowelsAndConsonants('JavaScript')); // { vowels: 3, consonants: 7 }
// console.log(countVowelsAndConsonants('12345')); // { vowels: 0, consonants: 0 }

const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};
// console.log(factorial(0)); // 1
// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(3)); // 6

const flattenArray = (arr) => {
  if (!arr.length) return [];
  const result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  });
  return result;
};
// console.log(flattenArray([1, 2, 3])); // [1, 2, 3]
// console.log(flattenArray([1, [2, 3], 4])); // [1, 2, 3, 4]
// console.log(flattenArray([1, [2, [3, [4, 5]]]])); // [1, 2, 3, 4, 5]
// console.log(flattenArray([])); // []

const fibonacci = (n) => {
  if (n === 0) return 0;
  if (n < 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
// console.log(fibonacci(0)); // 0
// console.log(fibonacci(1)); // 1
// console.log(fibonacci(2)); // 1
const fetchRetryer2 = async (url, count = 5) => {
  try {
    const resp = await fetch(url);
    if (!resp.ok) throw new Error('Fetch error');
    return Promise.resolve(resp);
  } catch (e) {
    if (count > 0) {
      return fetchRetryer2(url, count - 1);
    } else {
      return Promise.reject(e);
    }
  }
};
// fetchRetryer2('https://jsonplaceholder.typicode.com/posts/1')
//   .then((res) => res.json())
//   .then((data) => console.log('Success:', data))
//   .catch((err) => console.error('Failed:', err.message));
//
// fetchRetryer2('https://invalid-url.example')
//   .then((res) => res.json())
//   .catch((err) => console.error('Failed after retries:', err.message));

const promiseAll = (arr) => {
  const result = [];
  let resolvedCount = 0;
  return new Promise((resolve, reject) => {
    if (!arr.length) resolve([]);
    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i])
        .then((data) => {
          resolvedCount += 1;
          result[i] = data;
          if (resolvedCount === arr.length) {
            resolve(result);
          }
        })
        .catch(reject);
    }
  });
};

// const promise1 = Promise.resolve(1);
// const promise2 = Promise.resolve(2);
// const promise3 = Promise.resolve(3);
// const promise4 = new Promise((resolve) => setTimeout(resolve, 100, 4));
//
// promiseAll([promise1, promise2, promise3, promise4])
//   .then((results) => {
//     console.log(results); // Output: [1, 2, 3, 4]
//   })
//   .catch((error) => {
//     console.error(error);
//   });
//
// const promise5 = Promise.reject('Error occurred');
//
// promiseAll([promise1, promise2, promise5])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((error) => {
//     console.error(error); // Output: Error occurred
//   });

const asyncLimit = (cb, timeLimit) => {
  return async (...args) => {
    try {
      const resp = await Promise.race([
        cb(...args),
        new Promise((_, reject) =>
          setTimeout(() => {
            reject('Превышен лимит исполнения');
          }, timeLimit),
        ),
      ]);
      return Promise.resolve(resp);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
// Тестовые данные
// const fn = async (n) => {
//   await new Promise((res) => setTimeout(res, 100));
//
//   return n * n;
// };
//
// console.log(asyncLimit(fn, 50)(5)); // rejected превышен лимит
// console.log(asyncLimit(fn, 150)(5)); // resolve 25
//
// const fn2 = async (a, b) => {
//   await new Promise((res) => setTimeout(res, 120));
//
//   return a + b;
// };
//
// console.log(asyncLimit(fn2, 100)(1, 2));
// console.log(asyncLimit(fn2, 150)(1, 2));

Array.prototype._filter = function (fn) {
  const result = [];
  this.forEach((item, index) => {
    if (fn(item, index, this)) {
      result.push(item);
    }
  });
  return result;
};

// console.log([1, 2, 3, 4, 5]._filter((n) => n % 2 === 0)); // [2, 4]
// console.log(
//   ['apple', 'banana', 'cherry']._filter((fruit) => fruit.includes('a')),
// ); // ["apple", "banana"]
// console.log([10, 20, 30]._filter((num, index) => index % 2 === 0)); // [10, 30]

Array.prototype._map = function (fn) {
  const result = [];
  this.forEach((item, index, arr) => {
    result.push(fn(item, index, arr));
  });
  return result;
};
// console.log([1, 2, 3]._map((n) => n * 2)); // [2, 4, 6]
// console.log(['a', 'b', 'c']._map((letter) => letter.toUpperCase())); // ["A", "B", "C"]
// console.log([10, 20, 30]._map((num, index) => num + index)); // [10, 21, 32]

Array.prototype._reduce = function (fn, initialValue) {
  let accumulator;
  if (initialValue !== undefined) {
    accumulator = initialValue;
  } else {
    accumulator = this[0];
  }
  this.forEach((item, index, array) => {
    accumulator = fn(accumulator, item, index, array);
  });
  return accumulator;
};
// console.log([1, 2, 3, 4]._reduce((acc, num) => acc + num)); // 10
// console.log([1, 2, 3, 4]._reduce((acc, num) => acc + num, 10)); // 20
// console.log(['a', 'b', 'c']._reduce((acc, char) => acc + char)); // "abc"
// console.log([2, 3, 4]._reduce((acc, num) => acc * num, 1)); // 24

const extractDomain = (baseUrl) => {
  try {
    const url = new URL(baseUrl);
    return url.host;
  } catch (err) {
    return null;
  }
};
// Тестовые данные
// console.log(extractDomain('https://www.google.com')); // "google.com"
// console.log(extractDomain('http://example.org')); // "example.org"
// console.log(extractDomain('https://sub.domain.com/path')); // "sub.domain.com"
// console.log(extractDomain('invalid-url')); // null

// Напишите функцию поиска максимального числа

const findMaxNumber = (array) => {
  // Ваш код здесь
  let maxNumber = array[0];
  array.forEach((num) => {
    if (num > maxNumber) maxNumber = num;
  });
  return maxNumber;
};
// console.log(findMaxNumber([1, 2, 3, 4, 5, 6])); // 6
// console.log(findMaxNumber([1, 0, 3, 4, 5, 10, 6])); // 10

// Напишите функцию сортировки массива
// (исходный массив должен остаться без изменений)

const getSortedArray = (arr) => {
  // Ваш код здесь
  if (arr.length <= 1) return arr;
  const less = [];
  const more = [];
  let pivot = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num < pivot) {
      less.push(num);
    } else if (num === pivot) {
      pivot = num;
    } else {
      more.push(num);
    }
  }

  return [...getSortedArray(less), pivot, ...getSortedArray(more)];
};

// console.log(getSortedArray([1, 5, 2, 4, 3]));

// Есть задача функция принимает массив чисел,
// необхоимо вернуть массив с наибольшими числами в порядке убывания,
// например принимает[1, 2, 5, 3, 4, 6, 4,] - вернуть[6, 5]

const getTopTwoDescending = (data) => {
  // Ваш код здесь
  let firstMax = -Infinity;
  let secondMax = -Infinity;

  data.forEach((num) => {
    if (num > firstMax) {
      secondMax = firstMax;
      firstMax = num;
    } else if (num > secondMax) {
      secondMax = num;
    }
  });

  return [firstMax, secondMax];
};
// console.log(getTopTwoDescending([1, 2, 5, 3, 4, 6, 4])); //[6, 5]

function sumPositiveEvenNumbers(arr) {
  // Ваш код здесь
  let total = 0;
  arr.forEach((num) => {
    if (num % 2 === 0 && num > 0) {
      total += num;
    }
  });
  return total;
}

// console.log(sumPositiveEvenNumbers([5, 0, -5, 20, 88, 17, -32])); // 108

function serializeElementFrequencies(arr) {
  // Ваш код здесь
  return arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
}

// console.log(serializeElementFrequencies([1, 2, 3, 4, 4])); // {'1:1, 2:1, 3:1, 4:2'}

// Написать функцию чанк, которая принимает массив и какое-то
// кол-во элементов должно быть в чанке.
// Далее функция возвращает массив с массивами, как в комментах

function splitIntoChunks(arr, num) {
  // Ваш код здесь
  const result = [];
  for (let i = 0; i < arr.length; i += num) {
    result.push(arr.slice(i, i + num));
  }
  return result;
}

// console.log(splitIntoChunks([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // [[1,2,3],[4,5,6],[7,8,9]]
// console.log(splitIntoChunks([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)); // [[1,2,3,4],[5,6,7,8],[9]]
// console.log(splitIntoChunks([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)); // [[1,2],[3,4],[5,6],[7,8],[9]]
