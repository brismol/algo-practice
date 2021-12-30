const minChange = (amount, coins, memo = {}) => {
  if (amount in memo) return memo[amount];
  if (amount === 0) return 0;
  if (amount < 0) return -1;

  let min = Infinity;

  for (const coin of coins) {
    const attempt = minChange(amount - coin, coins, memo);
    if (attempt < min && attempt > -1) min = attempt;
  }

  if (min < Infinity) {
    memo[amount] = min + 1;
  } else {
    memo[amount] = -1;
  }

  return memo[amount];
};
