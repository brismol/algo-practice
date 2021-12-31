const canConcat = (s, words, i = 0, memo = {}) => {
  if (i in memo) return memo[i];

  if (i === s.length) return true;

  memo[i] = false;

  for (const word of words) {
    if (s.slice(i, i + word.length) === word) {
      if (canConcat(s, words, i + word.length, memo)) memo[i] = true;
    }
  }

  return memo[i];
};
