'use strict';

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  if (nums.length < 2) return [];
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const diff = target - current;
    if (map.has(diff)) return [map.get(diff), i];
    map.set(current, i);
  }
  return [];
};

const createMemory = () => {
  const arr = [];
  return (val) => {
    arr.push(val);
    return arr;
  };
};
// const remember = createMemory();
//
// console.log(remember(1)); // [1]
// console.log(remember(5)); // [1, 5]
// console.log(remember(3)); // [1, 5, 3]

const createCounter = (init) => {
  let currentCount = init;
  return {
    increment: () => ++currentCount,
    decrement: () => --currentCount,
    reset: () => {
      currentCount = init;
      return currentCount;
    },
  };
};
// const counter = createCounter(5);
//
// console.log(counter.increment()); // 6
// console.log(counter.increment()); // 7
// console.log(counter.decrement()); // 6
// console.log(counter.reset()); // 5

const orders = [
  { customerId: 'A', amount: 100, status: 'completed' },
  { customerId: 'B', amount: 200, status: 'completed' },
  { customerId: 'A', amount: 50, status: 'completed' },
  { customerId: 'C', amount: 300, status: 'pending' },
  { customerId: 'B', amount: 50, status: 'pending' },
];

// функция должна вернуть массив customerId (в порядке убывания суммы всех заказов),
// содержащий не более topN клиентов, у которых есть хотя бы один завершённый заказ
function getTopCustomers(orders, topN) {
  const map = {};

  for (const order of orders) {
    if (order.status !== 'completed') continue;
    const key = order.customerId;

    if (map[key]) {
      map[key] += order.amount;
    } else {
      map[key] = order.amount;
    }
  }
  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([customerId]) => customerId);
}

// const result = getTopCustomers(orders, 2);
// console.log(result);
