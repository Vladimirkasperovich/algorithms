'use strict';

/**
 * Задача: First Unique
 *
 * Напиши функцию firstUnique(arr), которая принимает
 * массив чисел и возвращает первое число,
 * встречающееся в массиве ровно один раз.
 *
 * Если уникальных чисел нет, верни null.
 *
 * Условия:
 * - Не изменять исходный массив.
 * - Не использовать sort().
 * - Желательная временная сложность O(n).
 */

function firstUnique(arr) {
  const map = new Map();
  arr.forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1);
  });

  const found = map.entries().find(([_, value]) => value === 1);

  return found ? found[0] : null;
}

// Тест-кейсы
// console.log(firstUnique([4, 5, 4, 6, 5, 7])); // 6
// console.log(firstUnique([1, 1, 2, 2])); // null
// console.log(firstUnique([9, 3, 9, 4, 3])); // 4
// console.log(firstUnique([1, 2, 3, 4])); // 1
// console.log(firstUnique([5, 5, 5])); // null
// console.log(firstUnique([])); // null

/**
 * Задача: Group By Category
 *
 * Напиши функцию groupByCategory(products),
 * которая принимает массив товаров.
 *
 * Каждый товар содержит:
 * - id: number
 * - name: string
 * - category: string
 *
 * Нужно сгруппировать товары по категориям.
 *
 * Результат — объект, где:
 * - ключ — название категории;
 * - значение — массив названий товаров этой категории.
 *
 * Условия:
 * - Не изменять исходный массив.
 * - Сохранить порядок товаров внутри категорий.
 * - Желательная временная сложность O(n).
 */

function groupByCategory(products) {
  // Твоё решение

  const map = new Map();

  products.forEach(({ category, name }) => {
    if (!map.has(category)) {
      map.set(category, [name]);
    } else {
      map.get(category).push(name);
    }
  });

  return Object.fromEntries(map);
}

// Тест-кейсы
// console.log(
//   groupByCategory([
//     { id: 1, name: 'Rod', category: 'Fishing' },
//     { id: 2, name: 'Ball', category: 'Sport' },
//     { id: 3, name: 'Reel', category: 'Fishing' },
//   ]),
// );
// // { Fishing: ["Rod", "Reel"], Sport: ["Ball"] }
//
// console.log(
//   groupByCategory([
//     { id: 1, name: 'Laptop', category: 'Electronics' },
//     { id: 2, name: 'Phone', category: 'Electronics' },
//   ]),
// );
// // { Electronics: ["Laptop", "Phone"] }
//
// console.log(groupByCategory([{ id: 1, name: 'Book', category: 'Books' }]));
// // { Books: ["Book"] }
//
// console.log(groupByCategory([]));
// // {}

/**
 * Задача: Two Sum
 *
 * Напиши функцию twoSum(nums, target).
 *
 * Функция принимает:
 * - nums — массив чисел;
 * - target — целевую сумму.
 *
 * Найди индексы двух разных элементов,
 * сумма которых равна target.
 *
 * Верни массив из двух индексов.
 * Если подходящей пары нет — верни null.
 *
 * Условия:
 * - Не изменять исходный массив.
 * - Нельзя использовать один элемент дважды.
 * - Желательная временная сложность O(n).
 */

function twoSum(nums, target) {
  // Твоё решение
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    if (seen.has(diff)) {
      return [seen.get(diff), i];
    }
    seen.set(num, i);
  }
  return null;
}

// Тест-кейсы
// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // [1, 2]
// console.log(twoSum([3, 3], 6)); // [0, 1]
// console.log(twoSum([1, 2, 3], 10)); // null
// console.log(twoSum([], 5)); // null
// console.log(twoSum([-3, 4, 3, 90], 0)); // [0, 2]

/**
 * Задача: Most Expensive Product
 *
 * Напиши функцию findMostExpensive(products).
 *
 * Функция принимает массив товаров.
 * Каждый товар содержит:
 * - id: number
 * - name: string
 * - price: number
 *
 * Нужно найти товар с самой высокой ценой
 * и вернуть весь объект товара.
 *
 * Условия:
 * - Не использовать sort().
 * - Не изменять исходный массив.
 * - Если массив пустой, вернуть null.
 * - Если цены одинаковые, вернуть первый товар.
 * - Желательная сложность O(n).
 */

function findMostExpensive(products) {
  // Твоё решение
  if (!products.length) return null;

  let result = products[0];
  for (const product of products) {
    if (product.price > result.price) {
      result = product;
    }
  }
  return result;
}

// // Тест-кейсы
// console.log(
//   findMostExpensive([
//     { id: 1, name: 'Rod', price: 150 },
//     { id: 2, name: 'Reel', price: 300 },
//     { id: 3, name: 'Hook', price: 20 },
//   ]),
// ); // { id: 2, name: "Reel", price: 300 }
//
// console.log(
//   findMostExpensive([
//     { id: 1, name: 'Rod', price: 200 },
//     { id: 2, name: 'Reel', price: 200 },
//   ]),
// ); // { id: 1, name: "Rod", price: 200 }
//
// console.log(findMostExpensive([{ id: 1, name: 'Hook', price: 15 }])); // { id: 1, name: "Hook", price: 15 }
//
// console.log(findMostExpensive([])); // null
