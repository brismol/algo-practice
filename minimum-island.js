const minimumIsland = (grid) => {
  let minIsle = Infinity;

  const visited = new Set();

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      const count = countIsland(grid, r, c, visited);
      if (count < minIsle) minIsle = count;
    }
  }

  return minIsle;
};

const countIsland = (grid, r, c, visited) => {
  if (grid[r][c] === 'W') return Infinity;
  if (visited.has(r + ',' + c)) return Infinity;

  visited.add(r + ',' + c);

  let size = 1;

  const neighbors = getNeighbors(grid, r, c);

  for (const [row, col] of neighbors) {
    const count = countIsland(grid, row, col, visited);
    if (count < Infinity) size += count;
  }

  return size;
};

const getNeighbors = (grid, r, c) => {
  const neighbors = [];

  if (r - 1 >= 0) neighbors.push([r - 1, c]);
  if (r + 1 < grid.length) neighbors.push([r + 1, c]);
  if (c - 1 >= 0) neighbors.push([r, c - 1]);
  if (c + 1 < grid[r].length) neighbors.push([r, c + 1]);

  return neighbors;
};
