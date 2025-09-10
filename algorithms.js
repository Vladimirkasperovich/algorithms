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
