// Необходимо обработать массив таким образом, чтобы распределить людей по группам городов

// Данные на вход
// const people = [
//   {
//     name: 'Alex',
//     city: 'Moscow',
//   },
//   {
//     name: 'Ivan',
//     city: 'Moscow',
//   },
//   {
//     name: 'Sasha',
//     city: 'Moscow',
//   },
//   {
//     name: 'Joe',
//     city: 'New York',
//   },
//   {
//     name: 'Johan',
//     city: 'Berlin',
//   },
// ];

const groupByCity = (array) => {
  const group = {};
  for (const user of array) {
    const key = user.city;
    if (!group[key]) {
      group[key] = user.name;
    } else {
      if (!Array.isArray(group[key])) {
        group[key] = [group[key]];
      }
      group[key].push(user.name);
    }
  }
  return group;
};
// console.log(groupByCity(people));
// Данные на выход
/*
{
  'Moscow': [ 'Alex', 'Ivan' ],
  'New York': 'Joe',
  'Berlin': 'Johan'
}
*/

const array1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]; // [[1, 6], [8, 10], [15, 18]]
const array2 = [
  [1, 4],
  [4, 5],
];
const array3 = [
  [11, 12],
  [2, 3],
  [5, 7],
  [1, 4],
  [8, 10],
  [6, 8],
]; // [[1, 4], [5, 10], [11, 12]]

function merge(intervals) {
  // ваш код
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const last = result[result.length - 1];
    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      result.push(current);
    }
  }
  return result;
}

// console.log(merge(array1));
// console.log(merge(array2));
// console.log(merge(array3));

// const object = {
//   a: {
//     d: {
//       h: 4,
//     },
//     e: 2,
//   },
//   b: 1,
//   c: {
//     f: {
//       g: 3,
//       k: {},
//     },
//   },
// };

const addLevels = (obj, level = 0) => {
  const result = {};
  for (const key in obj) {
    if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      result[key] = addLevels(obj[key], level + 1);
    } else {
      result[key] = obj[key];
    }
  }
  result.level = level;
  return result;
};
// console.log(addLevels(object));
// Данные на выход
/*
updatedObject {
  a: { d: { h: 4, level: 2 }, e: 2, level: 1 },
  b: 1,
  c: { f: { g: 3, k: [Object], level: 2 }, level: 1 },
  level: 0
}*/

// Object { a: { d: { h: 4 }, e: 2 }, b: 1, c: { f: { g: 3, k: {} } } }
