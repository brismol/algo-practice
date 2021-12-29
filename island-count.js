const islandCount = (grid) => {
  const visited = new Set();

  let islands = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (explore(grid, row, col, visited)) islands++;
    }
  }

  return islands;
};

const explore = (grid, r, c, visited) => {
  if (grid[r][c] === 'W') return false;
  if (visited.has(r + ',' + c)) return false;

  visited.add(r + ',' + c);
  const neighbors = getNeighbors(grid, r, c);

  for (const [row, col] of neighbors) {
    explore(grid, row, col, visited);
  }

  return true;
};

const getNeighbors = (grid, r, c) => {
  const neighbors = [];

  if (r - 1 >= 0) neighbors.push([r - 1, c]);
  if (r + 1 < grid.length) neighbors.push([r + 1, c]);
  if (c - 1 >= 0) neighbors.push([r, c - 1]);
  if (c + 1 < grid[r].length) neighbors.push([r, c + 1]);

  return neighbors;
};
