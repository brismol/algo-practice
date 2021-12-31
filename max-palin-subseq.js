const maxPalinSubsequence = (str) => {
  let left = 0;
  let right = str.length;

  return exploreSubs(str, left, right);
};

const exploreSubs = (str, left, right, memo = {}) => {
  const current = str.slice(left, right + 1);
  if (current in memo) return memo[current];
  //str.length <= 0 return 0
  if (right - left < 0) return 0;
  //str.length === 1 return 1
  if (right - left === 0) return 1;

  if (str[left] === str[right]) {
    memo[current] = 2 + exploreSubs(str, left + 1, right - 1, memo);
  } else {
    memo[current] = Math.max(
      exploreSubs(str, left + 1, right, memo),
      exploreSubs(str, left, right - 1, memo)
    );
  }

  return memo[current];
};
