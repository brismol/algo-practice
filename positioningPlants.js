const positioningPlants = (costs, pos = 0, prev = 'none', memo = {}) => {
  const seq = pos + ',' + prev;
  if (seq in memo) return memo[seq];

  if (pos === costs.length) return 0;

  let min = Infinity;

  for (let i = 0; i < costs[pos].length; i++) {
    if (i === prev) continue;

    const attempt = positioningPlants(costs, pos + 1, i, memo) + costs[pos][i];
    if (attempt < min) min = attempt;
  }

  memo[seq] = min;
  return min;
};
