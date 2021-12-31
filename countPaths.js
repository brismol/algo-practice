const countPaths = (grid) => {
  return findPath(grid, grid.length - 1, grid[0].length - 1);
};

const findPath = (grid, r, c, memo = {}) => {
  const str = r + ',' + c;

  if (str in memo) return memo[str];
  if (r < 0 || c < 0) return 0;
  if (grid[r][c] === 'X') return 0;
  if (r === 0 && c === 0) return 1;

  memo[str] = findPath(grid, r - 1, c, memo) + findPath(grid, r, c - 1, memo);
  return memo[str];
};
