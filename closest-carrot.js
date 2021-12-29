const closestCarrot = (grid, startRow, startCol) => {
  const visited = new Set();

  const queue = [[startRow, startCol, 0]];

  while (queue.length) {
    const [r, c, length] = queue.shift();
    if (grid[r][c] === 'C') return length;
    if (grid[r][c] === 'X') continue;
    if (visited.has(r + ',' + c)) continue;

    visited.add(r + ',' + c);

    const neighbors = getNeighbors(grid, r, c);

    for (const [row, col] of neighbors) {
      queue.push([row, col, length + 1]);
    }
  }

  return -1;
};

const getNeighbors = (grid, r, c) => {
  const neighbors = [];

  if (r - 1 >= 0) neighbors.push([r - 1, c]);
  if (r + 1 < grid.length) neighbors.push([r + 1, c]);
  if (c - 1 >= 0) neighbors.push([r, c - 1]);
  if (c + 1 < grid[r].length) neighbors.push([r, c + 1]);

  return neighbors;
};
