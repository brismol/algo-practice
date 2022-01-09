const anagrams = (s1, s2) => {
  const strMap = {};

  for (const char of s1) {
    strMap[char] = strMap[char] || 0;
    strMap[char]++;
  }

  for (const char of s2) {
    if (char in strMap) {
      strMap[char]--;
    } else {
      return false;
    }
  }

  for (const char in strMap) {
    if (strMap[char] !== 0) {
      return false;
    }
  }
  return true;
};
