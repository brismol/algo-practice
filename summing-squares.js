const summingSquares = (n) => {
  const squares = buildSquares(n);

  return minSum(squares, n);
};

const minSum = (squares, n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n < 0) return Infinity;

  let min = Infinity;

  for (const sq of squares) {
    const attempt = minSum(squares, n - sq, memo);
    if (attempt < min) min = attempt;
  }

  memo[n] = min + 1;
  return memo[n];
};

const buildSquares = (n) => {
  const squares = [];

  for (let i = 1; i * i <= n; i++) {
    squares.push(i * i);
  }

  return squares;
};
