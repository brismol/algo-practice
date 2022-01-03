const maxIncreasingSubseq = (
  numbers,
  i = 0,
  previous = -Infinity,
  memo = {}
) => {
  const pos = previous + ',' + i;
  if (pos in memo) return memo[pos];

  if (i === numbers.length) return 0;

  const resultsArray = [];

  const current = numbers[i];

  const withoutCurrent = maxIncreasingSubseq(numbers, i + 1, previous, memo);
  resultsArray.push(withoutCurrent);

  if (current > previous) {
    const withCurrent = 1 + maxIncreasingSubseq(numbers, i + 1, current, memo);
    resultsArray.push(withCurrent);
  }

  memo[pos] = Math.max(...resultsArray);

  return memo[pos];
};
