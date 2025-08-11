function isAnagram(str1, str2) {
  const firstWord = str1.toLowerCase().split('').sort().join('');
  const secondWord = str2.toLowerCase().split('').sort().join('');
  return firstWord === secondWord;
}

// console.log(isAnagram('listen', 'silent')); // true
// console.log(isAnagram('hello', 'world')); // false
// console.log(isAnagram('evil', 'vile')); // true

function hasUniqueChars(str) {
  if (!str.length) return true;
  const seen = new Map();
  for (const sElement of str.toLowerCase()) {
    seen.set(sElement, (seen.get(sElement) || 0) + 1);
  }

  return [...seen.values()].every((value) => value === 1);
}

// console.log(hasUniqueChars('abcdef')); // true
// console.log(hasUniqueChars('aabcde')); // false
// console.log(hasUniqueChars('')); // true

function isBalanced(str) {
  const map = { '(': ')', '{': '}', '[': ']' };
  const stack = [];

  for (const bracket of str) {
    if (map[bracket]) {
      stack.push(bracket);
    } else {
      const lastBracket = stack.pop();
      if (map[lastBracket] !== bracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// console.log(isBalanced('{[()]}')); // true
// console.log(isBalanced('{[(])}')); // false
// console.log(isBalanced('()[]{}')); // true

function flattenArray(arr) {
  if (!arr.length) return arr;
  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

// console.log(flattenArray([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]
// console.log(flattenArray([1, [2, 3], 4])); // [1, 2, 3, 4]
// console.log(flattenArray([])); // [1, 2, 3, 4]

function groupBy(arr, key) {
  if (!arr.length) return arr;
  const map = new Map();

  arr.forEach((item) => {
    const { [key]: value } = item;
    if (!map.has(value)) {
      map.set(value, [item]);
    } else {
      map.get(value).push(item);
    }
  });

  return map;
}

// console.log(
//   groupBy(
//     [
//       { name: 'John', age: 25 },
//       { name: 'Jane', age: 25 },
//       { name: 'Mike', age: 30 },
//     ],
//     'age',
//   ),
// );
// {
//   25: [ {name:'John', age:25}, {name:'Jane', age:25} ],
//   30: [ {name:'Mike', age:30} ]
// }

function compose(...fns) {
  // твой код
  return (...args) => {
    return fns.reduceRight(
      (acc, cur) => {
        acc = cur(acc);
        return acc;
      },
      ...args,
    );
  };
}

// const add2 = (x) => x + 2;
// const mul3 = (x) => x * 3;
//
// console.log(compose(mul3, add2)(5)); // (5 + 2) * 3 = 21
// console.log(compose(add2, mul3)(5)); // (5 * 3) + 2 = 17

function wordFrequency(str) {
  const arr = str.split(' ');
  const map = new Map();
  arr.forEach((word) => {
    const currentWord = word.toLowerCase();
    map.set(currentWord, (map.get(currentWord) || 0) + 1);
  });
  return map;
}

// console.log(wordFrequency('Hello world hello'));
// { hello: 2, world: 1 }

function debounce(fn, delay) {
  let timeoutID;
  return () => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      fn();
    }, delay);
  };
}

// console.log(debounce(() => 5 + 1, 100));
// console.log(debounce(() => 4 + 1, 100));
// console.log(debounce(() => 3 + 1, 100));

// Есть массив пользователей и массив постов
// users = [{id:1, name:'John'}, {id:2, name:'Jane'}]
// posts = [{id:1, userId:1, title:'Post 1'}, {id:2, userId:2, title:'Post 2'}]
// Нужно получить объект вида:
// {
//   John: ['Post 1'],
//   Jane: ['Post 2']
// }

const getUsersAndPosts = (users, posts) => {
  const result = {};
  users.forEach(({ name, id }) => {
    result[name] = posts.filter((p) => p.userId === id).map((p) => p.title);
  });
  return result;
};

// console.log(
//   getUsersAndPosts(
//     [
//       { id: 1, name: 'John' },
//       { id: 2, name: 'Jane' },
//     ],
//     [
//       { id: 1, userId: 1, title: 'Post 1' },
//       { id: 2, userId: 2, title: 'Post 2' },
//     ],
//   ),
// );

function findPairs(arr, target) {
  const seen = {};
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const diff = target - item;
    if (seen[diff]) {
      result.push([diff, item]);
    }
    seen[item] = item;
  }
  return result;
}

// console.log(findPairs([1, 2, 3, 4, 5], 5));
// [[1,4], [2,3]]

const twoSum = (arr, target) => {
  const seen = new Map();
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const diff = target - num;
    if (seen.has(diff)) {
      return [seen.get(diff), i];
    }
    seen.set(num, i);
  }
};

// console.log(twoSum([0, 1, 3, 5, 6, 9], 8)); //[2, 3]
// console.log(twoSum([0, 1, 3, 5, 6, 9], 11)); //[2, 3]
