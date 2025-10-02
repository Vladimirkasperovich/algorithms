'use strict';

// Напишите функцию поиска максимального числа
const findMaxNumber = (array) => {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (num > max) max = num;
  }
  return max;
};
// console.log(findMaxNumber([1, 2, 3, 4, 5, 6]));

// Напишите функцию сортировки массива
// (исходный массив должен остаться без изменений)
const getSortedArray = (arr) => {
  if (arr.length < 1) return [...arr];
  const left = [];
  const right = [];
  const pivot = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];
    if (num < pivot) {
      left.push(num);
    } else {
      right.push(num);
    }
  }
  return [...getSortedArray(left), pivot, ...getSortedArray(right)];
};
// console.log(getSortedArray([1, 5, 2, 4, 3]));

// Есть задача функция принимает массив чисел,
// необхоимо вернуть массив с наибольшими числами в порядке убывания,
// например принимает[1, 2, 5, 3, 4, 6, 4,] - вернуть[6, 5]
const getTopTwoDescending = (data) => {
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  for (let i = 1; i < data.length; i++) {
    const num = data[i];
    if (num > firstMax) {
      secondMax = firstMax;
      firstMax = num;
    } else if (num > secondMax) {
      secondMax = num;
    }
  }
  return [firstMax, secondMax];
};
// console.log(getTopTwoDescending([1, 2, 5, 3, 4, 6, 4]));

function sumPositiveEvenNumbers(arr) {
  return arr
    .filter((item) => item % 2 === 0 && item > 0)
    .reduce((acc, cur) => acc + cur, 0);
}

// console.log(sumPositiveEvenNumbers([5, 0, -5, 20, 88, 17, -32])); // 22

//изменить код так, что бы в итоге выводился массив i ([], [1], [1, 1]) (сейчас выводится [1, 1, 1])

function delayedArrayLogging() {
  for (let i = []; i.length < 3; i.push(1)) {
    setTimeout(
      (j) => {
        console.log(j);
      },
      i.length * 1000,
      [...i],
    );
  }
}

// console.log(delayedArrayLogging());

function serializeElementFrequencies(arr) {
  // Ваш код здесь
  const seen = {};
  arr.forEach((num) => {
    seen[num] = (seen[num] || 0) + 1;
  });
  return seen;
}

// console.log(serializeElementFrequencies([1, 2, 3, 4, 4])); // {'1:1, 2:1, 3:1, 4:2'}

// Реализовать функцию, которая будет принимать на вход массив чисел и всегда возвращать
// массив этих же чисел, но каждый раз в рандомном порялке

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7]));

// Написать функцию чанк, которая принимает массив и какое-то
// кол-во элементов должно быть в чанке.
// Далее функция возвращает массив с массивами, как в комментах
function splitIntoChunks(arr, num) {
  const result = [];
  for (let i = 0; i < arr.length; i += num) {
    result.push(arr.slice(i, i + num));
  }
  return result;
}

// console.log(splitIntoChunks([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // [[1,2,3],[4,5,6],[7,8,9]]
// console.log(splitIntoChunks([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)); // [[1,2,3,4],[5,6,7,8],[9]]
// console.log(splitIntoChunks([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)); // [[1,2],[3,4],[5,6],[7,8],[9]]

// вернуть массив уникальных чисел
const getUniqDigits = (arr) => {
  const onlyDigits = arr.map(Number).filter((item) => !isNaN(item));
  const seen = {};
  onlyDigits.forEach((item) => {
    if (!seen[item]) {
      seen[item] = item;
    }
  });
  return [...Object.values(seen)].sort((a, b) => a - b);
};

// console.log(getUniqDigits(['a',0,4,'4','0',5,'d',7,0,'8',7,10,'s',1,3,'9',10,3,1,9,'u',6,5,'2'])); // output [0,1,2,3,4,5,6,7,8,9,10]`

/*
Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве. Если таких строк несколько, то нужно вернуть первую, идя слева на право.
*/
function highestFrequency(array) {
  const seenStr = new Map();
  array.forEach((str) => {
    seenStr.set(str, (seenStr.get(str) || 0) + 1);
  });
  const maxValue = Math.max(...seenStr.values());
  const foundElemByMaxValue = [...seenStr.entries()].find(
    (elem) => elem[1] === maxValue,
  );
  return foundElemByMaxValue.length > 0 ? foundElemByMaxValue[0] : null;
}

// console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])); // -> c
// console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])); // -> abc
// console.log(highestFrequency(['abc', 'def'])); // -> abc
// console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi',]),); // -> ghi

/*
Есть массив операций
Необходимо операции отсортировать по дате и сгруппировать их по году, а в качестве значений представить массивы с датами в формате MM-DD.
Пример результаты:
result = {
	"2017": [
		"07-31",
		"08-22"
		],
	"2018": [
		"01-01",
		"02-22"
	]
}
*/

const operations = [
  { date: '2017-07-31', amount: '5422' },
  { date: '2017-06-30', amount: '5220' },
  { date: '2017-05-31', amount: '5365' },
  { date: '2017-08-31', amount: '5451' },
  { date: '2017-09-30', amount: '5303' },
  { date: '2018-03-31', amount: '5654' },
  { date: '2017-10-31', amount: '5509' },
  { date: '2017-12-31', amount: '5567' },
  { date: '2018-01-31', amount: '5597' },
  { date: '2017-11-30', amount: '5359' },
  { date: '2018-02-28', amount: '5082' },
  { date: '2018-04-14', amount: '2567' },
];

function sortOperations(operations) {
  // Ваш код здесь
  const sortedOperations = [...operations].sort((a, b) =>
    a.date.localeCompare(b.date),
  );
  const result = {};
  sortedOperations.forEach((operation) => {
    const date = operation.date.split('-');
    if (date.length === 3) {
      const [year, month, day] = date;

      if (!result[year]) {
        result[year] = [];
      } else {
        result[year].push(`${month}-${day}`);
      }
    }
  });
  return result;
}

// console.log(sortOperations(operations));

// Необходимо сделать выборки.
// 1. Список имен, отсортированный по размеру зарплаты
// 2. Размер максимальной зарплаты
// 3. Статистика по каждому отделу: сумма затрат, количество сотрудников, средняя з/п

const arr = [
  { name: 'Вася', salary: 10000, department: 'Frontend' },
  { name: 'Петя', salary: 12000, department: 'Backend' },
  { name: 'Дима', salary: 10500, department: 'Frontend' },
  { name: 'Оля', salary: 15000, department: 'Backend' },
  { name: 'Саша', salary: 8000, department: 'Frontend' },
  { name: 'Олег', salary: 9000, department: 'Testing' },
];

const findMaxSalary = (data) => {
  const sortedData = [...data].sort((a, b) => a.salary - b.salary);
  const names = sortedData.map(({ name }) => name);
  const maxSalary = sortedData[sortedData.length - 1].salary;
  const statistics = {};

  sortedData.forEach(({ department, salary }) => {
    if (!statistics[department]) {
      statistics[department] = {
        amount_of_costs: salary,
        number_of_employees: 1,
        average_salary: salary,
      };
    } else {
      const savedStatistics = statistics[department];
      savedStatistics.amount_of_costs += salary;
      savedStatistics.number_of_employees += 1;
      savedStatistics.average_salary =
        savedStatistics.amount_of_costs / savedStatistics.number_of_employees;
    }
  });

  return {
    names,
    maxSalary,
    statistics,
  };
};
// console.log(findMaxSalary(arr));

// дан массив, необходимо вернуть строку с ошибкой если одно из значений не является числом,
// если все значения верны, то возвращаем разность суммы чисел кратных 7 и максимально значения массива

const getSumOfPreparedNumbers = (arr) => {
  if (arr.some((item) => isNaN(item) || typeof item !== 'number')) {
    return 'входящие данные не удовлетворяют требованиям';
  }
  const max = Math.max(...arr);
  const total = arr
    .filter((item) => item % 7 === 0)
    .reduce((acc, cur) => acc + cur, 0);
  return total - max;
};

// console.log(getSumOfPreparedNumbers([1, NaN, 21, 40, 50, 35, 2, NaN, 16, 17, NaN, 98, 77, 49]),); // output 'входящие данные не удовлетворяют требованиям'
// console.log(getSumOfPreparedNumbers([true])); // output 'входящие данные не удовлетворяют требованиям'
// console.log(getSumOfPreparedNumbers(['smth'])); // output 'входящие данные не удовлетворяют требованиям'
// console.log(getSumOfPreparedNumbers([1, 11, 21, 40, 50, 35, 2, 6, 16, 17, 63, 98, 77, 49,]),); // output 245

// Реализуйте функцию, которая возвращает индексы двух чисел из массива,
// сумма которых равна заданному значению
function locateSumPair(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const diff = target - num;
    if (map.has(diff)) {
      return [map.get(diff), i];
    } else {
      map.set(num, i);
    }
  }
  return [];
}

// console.log(locateSumPair([2, 7, 11, 15], 9)); // [0,1]

/*
Реализуйте функцию, которая меняет в строке регистр каждой буквы на противоположный.
Функция должна возвращать полученный результат
*/

const invertCase = (str) => {
  // Ваш код здесь
  let out = '';
  for (const char of str) {
    if (/[a-z]/.test(char)) {
      out += char.toUpperCase();
    } else if (/[A-Z]/.test(char)) {
      out += char.toLowerCase();
    } else {
      out += char;
    }
  }
  return out;
};

// console.log(invertCase('Hello, World!')); // hELLO, wORLD!
// console.log(invertCase('I loVe JS')); // i LOvE js

/*
Напишите функцию, которая будет возвращать количество букв и цифр, не зависимо от регистра,
которые встречаются во входной строке более одного раза.
Можно предположить, что входная строка содержит только буквы алфавита (как прописные,
так и строчные) и числовые цифры.
Например:
"abcde" => 0 // все буквы уникальны
"aabbcde" => 2 // a и b задублированы
"aabBcde" => 2 // от регистра не зависит
"indivisibiity" => 1 // количество повторений не важно, как и то, что повторы идут подряд
*/

function countDuplicateCharacters(str) {
  // Ваш код здесь
  const map = new Map();
  for (const char of str.toLowerCase()) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  const foundElem = [...map.entries()].filter((elem) => elem[1] > 1);
  return foundElem.length;
}

// console.log(countDuplicateCharacters('abcde')); //0
// console.log(countDuplicateCharacters('aabbcde')); //2
// console.log(countDuplicateCharacters('aabBcde')); //2
// console.log(countDuplicateCharacters('indivisibiity')); //1

function isUnique(string) {
  // Ваш код здесь
  const map = new Map();
  for (const char of string) {
    if (map.has(char)) {
      return false;
    }
    map.set(char, true);
  }
  return true;
}

// console.log(isUnique('abcdef')); // -> true
// console.log(isUnique('1234567')); // -> true
// console.log(isUnique('abcABC')); // -> true
// console.log(isUnique('abcadef')); // -> false

const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};
// Тестовая функция
// function expensiveCalculation(x, y) {
//   console.log('Выполняются сложные вычисления...');
//   return x * y + Math.sqrt(x) / y;
// }

// Применяем мемоизацию
// const memoizedCalculation = memoize(expensiveCalculation);
//
// // Тестируем
// console.log(memoizedCalculation(5, 10)); // Вычисляет
// console.log(memoizedCalculation(5, 10)); // Берет из кеша
// console.log(memoizedCalculation(3, 7)); // Вычисляет

/**
 * @param {Function} fn - асинхронная функция
 * @param {number} t - время в миллисекундах
 * @return {Function} - функция с ограничением по времени
 */
const timeLimit = function (fn, t) {
  return async function (...args) {
    try {
      const result = await Promise.race([
        fn(...args),
        new Promise((_, reject) => {
          setTimeout(() => reject('Time Limit Exceeded'), t);
        }),
      ]);
      return Promise.resolve(result);
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
// const fn1 = async (n) => {
//   await new Promise((res) => setTimeout(res, 100));
//   return n * n;
// };
// const limitedFn1 = timeLimit(fn1, 200);
//
// // Должен вернуть 25 (успевает за 100ms < 200ms)
// limitedFn1(5).then(console.log).catch(console.log);

function removeDupes(str) {
  // Ваш код здесь
  const map = {};
  for (const char of str) {
    if (!map[char]) {
      map[char] = char;
    }
  }
  return Object.values(map).join('');
}

// console.log(removeDupes('abcd')); // -> 'abcd'
// console.log(removeDupes('aabbccdd')); // -> 'abcd'
// console.log(removeDupes('abcddbca')); // -> 'abcd'
// console.log(removeDupes('abababcdcdcd')); // -> 'abcd'

/**
 * Функция должна преобразовывать строку в формат camelCase
 * @param str {string}
 */

function camelCase(str) {
  const arr = str.toLowerCase().split(/[^a-z]/);

  let out = '';
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];
    const firstChar = char[0].toUpperCase();
    const rest = char.slice(1);
    out += firstChar + rest;
  }
  return out;
}

// console.log(camelCase('mY-comPonent name') === 'MyComponentName');
// console.log(camelCase('mY-comPonent name'));

const minifyString = (string) => {
  const map = {};
  let out = '';
  for (const char of string) {
    map[char] = (map[char] || 0) + 1;
  }
  for (const key in map) {
    out += map[key] + key;
  }
  return out;
};

// console.log(minifyString('aaaawwwweerrr')); // '3a4w2e3r'

/*
"Счастливым" называют билет с номером, в котором сумма первой половины цифр равна сумме второй половины цифр.
Номера могут быть произвольной длины, с единственным условием, что количество цифр всегда чётно, например: 33 или 2341 и так далее.

Билет с номером 385916 — счастливый, так как 3 + 8 + 5 === 9 + 1 + 6. Билет с номером 231002 не является счастливым, так как 2 + 3 + 1 !== 0 + 0 + 2.
Реализуйте и экспортируйте по умолчанию функцию, проверяющую является ли номер счастливым (номер — всегда строка). Функция должна возвращать true, если билет счастливый, или false, если нет.
*/

const isHappyTicket = (str) => {
  // Ваш код здесь
  const len = str.length;
  if (len % 2 !== 0) return false;
  const half = len / 2;
  const firstHalf = str.slice(0, half);
  const secondHalf = str.slice(half);

  const sum = (s) => {
    return s.split('').reduce((acc, cur) => acc + Number(cur), 0);
  };

  return sum(firstHalf) === sum(secondHalf);
};

// console.log(isHappyTicket('385916')); // true
// console.log(isHappyTicket('231002')); // false
// console.log(isHappyTicket('1222')); // false
// console.log(isHappyTicket('054702')); // true
// console.log(isHappyTicket('00')); // true

function checkBrackets(str) {
  // Ваш код здесь
  const map = { '(': ')', '{': '}', '[': ']' };
  const stack = [];
  for (const bracket of str) {
    if (map[bracket]) {
      stack.push(bracket);
    } else {
      const last = stack.pop();
      if (map[last] !== bracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// console.log(checkBrackets('()')); // true
// console.log(checkBrackets('()[]{}')); // true
// console.log(checkBrackets('(]')); // false
// console.log(checkBrackets('{[]}')); // true
// console.log(checkBrackets('([)]')); // false
// console.log(checkBrackets('{[[]{}]}()()')); // true

function isBalanced(str) {
  // Ваш код здесь
  const map = { '(': ')', '{': '}', '[': ']' };
  const stack = [];
  for (const bracket of str) {
    if (map[bracket]) {
      stack.push(bracket);
    } else if (Object.values(map).includes(bracket)) {
      const last = stack.pop();
      if (map[last] !== bracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// console.log(isBalanced('(x + y) - (4)')); // -> true
// console.log(isBalanced('(((10 ) ()) ((?)(:)))')); // -> true
// console.log(isBalanced('[({()})]')); // -> true
// console.log(isBalanced('(50)((')); // -> false
// console.log(isBalanced('[{]}')); // -> false

/*
Дана структура данных в виде дерева
Необходимо написать функцию, возвращающую значения всех вершин дерева:
getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]
*/

const getTreeValuesTree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [{ value: 4 }, { value: 5 }],
    },
    {
      value: 3,
      children: [{ value: 6 }, { value: 7 }],
    },
  ],
};

const getTreeValues = (obj) => {
  // Ваш код здесь
  const result = [obj.value];
  if (Array.isArray(obj.children)) {
    for (const node of obj.children) {
      result.push(...getTreeValues(node));
    }
  }
  return result;
};

// console.log(getTreeValues(getTreeValuesTree));

// Функция `optionalChaining` проверяет наличие заданного пути
// и свойства в объекте и возвращает значение этого свойства,
// если оно существует. Если свойство или путь не существует,
// возвращается значение `undefined`.

function optionalChaining(obj, path) {
  if (!path.length) return obj;
  const keys = path.split('.');
  let result = obj;
  for (const key of keys) {
    if (!result[key]) {
      return undefined;
    } else {
      result = result[key];
    }
  }
  return result;
}

// console.log(optionalChaining({ a: { b: { c: { d: 'Привет!', }, }, }, }, 'a.b.c')); // Ответ = { d: 'Привет' }
// console.log(optionalChaining({ a: { b: { c: { d: 'Привет!', }, }, }, }, 'a.b.c.d')); // Ответ = Привет
// console.log(optionalChaining({ a: { b: { c: { d: 'Привет!', }, }, }, }, 'a.b.c.d.e')); // Ответ = undefined
// console.log(optionalChaining({ a: { b: { c: { d: 'Привет!', }, }, }, }, 'b.d.a')); // Ответ = undefined

// Написать функцию, которая принимает массив объектов и название поля объекта и возвращает массив объектов, отсортированных по переданному полю

const sortByFieldData = [
  { id: 1, age: 20, name: 'Иван', country: 'Russia', registred: true },
  { id: 2, age: 30, name: 'Дима', country: 'Usa', registred: true },
  { id: 3, age: 25, name: 'Леха', country: 'Russia', registred: false },
  { id: 4, age: 20, name: 'Леха', country: 'Usa', registred: false },
  { id: 5, age: 30, name: 'Иван', country: 'Russia', registred: true },
  { id: 6, age: 50, name: 'Леха', country: 'Russia', registred: true },
  { id: 7, age: 20, name: 'Дима', country: 'Usa', registred: false },
];

const sortByField = function (array, param) {
  if (!param) return array;
  // Ваш код здесь
  return [...array].sort((a, b) => a[param].localeCompare(b[param]));
};
// console.log(sortByField(sortByFieldData, 'country'));

// Напиши функцию includes(value) для объекта, которая принимает value и возращает true,
// если есть поле value с этим значением и false, если нет. Объект следующий:

const includesTree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [{ value: 4 }, { value: 5 }],
    },
    {
      value: 3,
      children: [{ value: 6 }, { value: 7 }],
    },
  ],
};

function includes(value, tree) {
  // Ваш код здесь
  if (tree.value === value) {
    return true;
  }
  if (Array.isArray(tree.children)) {
    for (const node of tree.children) {
      if (includes(value, node)) {
        return true;
      }
    }
  }
  return false;
}

// console.log(includes(1, includesTree));
// console.log(includes(11, includesTree)); // false
// console.log(includes(2, includesTree));
// console.log(includes(3, includesTree));
// console.log(includes(4, includesTree));
// console.log(includes(5, includesTree));
// console.log(includes(6, includesTree));
// console.log(includes(7, includesTree));
// console.log(includes(77, includesTree)); // false

const flattenObjArr = [
  {
    id: 1,
    next: [{ id: 2 }, { id: 3 }, { id: 4 }],
  },
  { id: 5, next: [{ id: 6 }, { id: 7 }, { id: 8 }] },
];

function flattenObj(arr) {
  // Ваш код здесь
  const result = [];
  for (const { id, next } of arr) {
    if (id) {
      result.push({ id });
    }
    if (Array.isArray(next)) {
      result.push(...flattenObj(next));
    }
  }
  return result;
}

// console.log(flattenObj(flattenObjArr));
//[ { id: 1 },
// { id: 2 },
// { id: 3 },
// { id: 4 },
// { id: 5 },
// { id: 6 },
// { id: 7 },
// { id: 8 } ]

// Напишите функцию, которая возвращает новый объект,
// в котором все примитивные элементы вложенных объектов были рекурсивно "подняты"

const obj = {
  a: {
    b: {
      c: 1,
      d: 2,
      e: 3,
    },
    f: {
      g: 4,
      h: 5,
    },
    i: 6,
    j: 7,
  },
};

const flattenNestedObject = (obj) => {
  // Ваш код здесь
  let result = {};
  for (const key in obj) {
    if (typeof obj[key] !== 'object') {
      result[key] = obj[key];
    } else {
      result = { ...result, ...flattenNestedObject(obj[key]) };
    }
  }
  return result;
};

// console.log(flattenNestedObject(obj)); // { c: 1, d: 2, e: 3, g: 4, h: 5, i: 6, j: 7 }

/**

 Преобразовать исходную струкруту данных к структуре следующего вида:
 const result = [
 { key: "А", totalCount: 700, cities: ["Астана"] },
 { key: "З", totalCount: 500, cities: ["Загреб"] },
 { key: "Л", totalCount: 500, cities: ["Лиссабон", "Лондон"] },
 { key: "М", totalCount: 700, cities: ["Магадан", "Москва"] },
 { key: "Н", totalCount: 800, cities: ["Новосибирск"] },
 { key: "Т", totalCount: 400, cities: ["Тверь"] }
 ];
 где
 key - первый символ названия города,
 totalCount - сумма значений count для всех городов
 cities - массив названий городов.
 *
 Значения в массиве results должны быть отсортированы по key
 Значения в массивах cities должны быть отсортированы
 */

const getTransformCitiesData = {
  Москва: { count: 100 },
  Лондон: { count: 200 },
  Лиссабон: { count: 300 },
  Тверь: { count: 400 },
  Загреб: { count: 500 },
  Магадан: { count: 600 },
  Астана: { count: 700 },
  Новосибирск: { count: 800 },
};

const getTransformCities = (data) => {
  // Ваш код здесь
  const result = {};
  for (const path in data) {
    const city = path;
    const key = path[0];
    if (!result[key]) {
      result[key] = { key, totalCount: data[path].count, cities: [city] };
    } else {
      result[key].totalCount += data[path].count;
      result[key].cities.push(city);
    }
  }
  for (const key in result) {
    result[key].cities.sort();
  }
  return Object.values(result).sort((a, b) => a.key.localeCompare(b.key));
};
// console.log(getTransformCities(getTransformCitiesData));

Array.prototype.myIncludes = function (value) {
  for (const item of this) {
    if (item === value) return true;
  }
  return false;
};

// const array = [1, 2, 3];
// console.log(array.myIncludes(2));
// // Expected output: true
//
// const pets = ['cat', 'dog', 'bat'];
//
// console.log(pets.myIncludes('cat'));
// // Expected output: true
//
// console.log(pets.myIncludes('at'));
// // Expected output: false
// // Ваш код здесь

//Написать метод массива, который будет возвращать массив уникальных значений

Array.prototype.findUnique = function () {
  // Ваш код здесь
  const counts = this.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  return this.filter((item) => counts[item] === 1);
};

// console.log([10, 5, 10, 1, 6, 6, 6, 7, 9, 9, 10].findUnique());
// // расширить массив методом findUnique, который возвращает новый массив, где перечислены только уникальные значения массива
// console.log([10, 5, 10, 6, 6, 7, 2, 9, 9, 'str', 'str', 'constructor', 'date', () => {},].findUnique(),);

Function.prototype.myBind = function (context, ...bindArgs) {
  const fn = this;
  if (typeof fn !== 'function') {
    throw new Error('bind must be called on a function');
  }
  return function (...args) {
    const uniqueProp = 'tempFN' + Math.random();
    context[uniqueProp] = fn;
    const result = context[uniqueProp](...bindArgs, ...args);
    delete context[uniqueProp];
    return result;
  };
};

// написать функцию-полифилл promiseAll
function myPromiseAll(promises) {
  // Ваш код здесь
  const result = [];
  let successCount = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((data) => {
          successCount += 1;
          result[i] = data;
          if (successCount === promises.length) {
            resolve(result);
          }
        })
        .catch(reject);
    }
  });
}

// const p1 = Promise.resolve('first');
//
// const p2 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 1000, 'second'),
// );
// const p3 = Promise.resolve('third');
// const p4 = Promise.reject('err');
//
// myPromiseAll([p1, p2, p3]).then(console.log).catch(console.log);
