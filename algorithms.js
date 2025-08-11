function isAnagram(str1, str2) {
  const firstWord = str1.toLowerCase().split('').sort().join('');
  const secondWord = str2.toLowerCase().split('').sort().join('');
  return firstWord === secondWord;
}

// console.log(isAnagram('listen', 'silent')); // true
// console.log(isAnagram('hello', 'world')); // false
// console.log(isAnagram('evil', 'vile')); // true
