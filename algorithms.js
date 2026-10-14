'use strict';

const orders = [
  { userId: 1, amount: 50 },
  { userId: 2, amount: 20 },
  { userId: 1, amount: 30 },
  { userId: 3, amount: 70 },
];

//Задача - посчитать общую сумму заказов по каждому пользователю и вернуть объект вроде { userId: totalAmount }. Попробуй накидать решение.
function getTotalAmount(orders) {
  const result = new Map();
  for (const order of orders) {
    result.set(order.userId, (result.get(order.userId) || 0) + order.amount);
  }
  return result;
}

// console.log(getTotalAmount(orders));

/*
ЗАДАЧА 1: First Unique Number

Напиши функцию firstUnique(arr), которая возвращает
первое число в массиве, встречающееся ровно один раз.

Условия:
- Порядок элементов имеет значение.
- Если уникальных чисел нет, верни null.
- Не изменяй исходный массив.

Пример:
[4, 5, 4, 6, 5, 7] → 6
*/

function firstUnique(arr) {
  const map = new Map();

  for (const item of arr) {
    map.set(item, (map.get(item) || 0) + 1);
  }

  for (const [key, value] of map.entries()) {
    if (value === 1) return key;
  }

  return null;
}

// console.log(firstUnique([4, 5, 4, 6, 5, 7])); // 6
// console.log(firstUnique([1, 2, 3, 2, 1])); // 3
// console.log(firstUnique([1, 1, 2, 2])); // null
// console.log(firstUnique([])); // null
// console.log(firstUnique([10])); // 10
// console.log(firstUnique([9, 7, 9, 2, 3, 2])); // 7

/*
ЗАДАЧА 2: Group Orders

Напиши функцию groupOrders(orders), которая
группирует заказы по userId и подсчитывает
общую сумму покупок каждого пользователя.

Входные данные:
Массив объектов:
- userId: number
- amount: number

Результат:
Объект, где ключ — userId,
а значение — сумма всех его заказов.

Условия:
1. Не изменяй исходный массив.
2. Если массив пустой, верни {}.
3. Постарайся решить задачу за O(n).
4. Не используй сторонние библиотеки.

Пример:
[
  { userId: 1, amount: 100 },
  { userId: 2, amount: 200 },
  { userId: 1, amount: 50 }
]

Результат:
{ 1: 150, 2: 200 }
*/

function groupOrders(orders) {
  if (!orders.length) return {};
  const map = new Map();

  for (const { userId, amount } of orders) {
    map.set(userId, {
      userId: userId,
      amount: map.has(userId) ? map.get(userId).amount + amount : amount,
    });
  }

  const result = {};
  for (const item of map.entries()) {
    result[item[0]] = item[1].amount;
  }
  return result;
}

// ТЕСТЫ

console.log(
  groupOrders([
    { userId: 1, amount: 100 },
    { userId: 2, amount: 200 },
    { userId: 1, amount: 50 },
  ]),
); // { 1: 150, 2: 200 }

console.log(
  groupOrders([
    { userId: 3, amount: 10 },
    { userId: 3, amount: 20 },
    { userId: 3, amount: 30 },
  ]),
); // { 3: 60 }

console.log(groupOrders([])); // {}

console.log(
  groupOrders([
    { userId: 1, amount: 0 },
    { userId: 2, amount: 75 },
  ]),
); // { 1: 0, 2: 75 }

console.log(
  groupOrders([
    { userId: 5, amount: 100 },
    { userId: 1, amount: 50 },
    { userId: 5, amount: -20 },
    { userId: 1, amount: 25 },
  ]),
); // { 1: 75, 5: 80 }
