const breakingBoundaries = (m, n, k, r, c, memo = {}) => {
  const key = k + ',' + r + ',' + c;
  if (key in memo) return memo[key];

  if (k < 0) return 0;
  if (r < 0 || r === m || c < 0 || c === n) return 1;

  const neighbors = [
    [r + 1, c],
    [r - 1, c],
    [r, c + 1],
    [r, c - 1],
  ];

  let total = 0;

  for (const [row, col] of neighbors) {
    total += breakingBoundaries(m, n, k - 1, row, col, memo);
  }

  memo[key] = total;
  return total;
};
