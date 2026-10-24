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
