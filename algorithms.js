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
