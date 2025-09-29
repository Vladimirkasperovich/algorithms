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
