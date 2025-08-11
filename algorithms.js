function isAnagram(str1, str2) {
  const firstWord = str1.toLowerCase().split('').sort().join('');
  const secondWord = str2.toLowerCase().split('').sort().join('');
  return firstWord === secondWord;
}

// console.log(isAnagram('listen', 'silent')); // true
// console.log(isAnagram('hello', 'world')); // false
// console.log(isAnagram('evil', 'vile')); // true

function hasUniqueChars(str) {
  if (!str.length) return true;
  const seen = new Map();
  for (const sElement of str.toLowerCase()) {
    seen.set(sElement, (seen.get(sElement) || 0) + 1);
  }

  return [...seen.values()].every((value) => value === 1);
}

// console.log(hasUniqueChars('abcdef')); // true
// console.log(hasUniqueChars('aabcde')); // false
// console.log(hasUniqueChars('')); // true

function isBalanced(str) {
  const map = { '(': ')', '{': '}', '[': ']' };
  const stack = [];

  for (const bracket of str) {
    if (map[bracket]) {
      stack.push(bracket);
    } else {
      const lastBracket = stack.pop();
      if (map[lastBracket] !== bracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// console.log(isBalanced('{[()]}')); // true
// console.log(isBalanced('{[(])}')); // false
// console.log(isBalanced('()[]{}')); // true
