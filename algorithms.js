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
