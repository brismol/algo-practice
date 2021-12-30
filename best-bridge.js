const bestBridge = (grid) => {
  const islandOne = new Set();
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 'L') {
        exporeFirstIsland(grid, r, c, islandOne);
        break;
      }
    }
    if (islandOne.size > 0) break;
  }
  console.log(islandOne);
  const queue = [...islandOne].map((l) => [l, 0]);

  return findBridge(grid, queue, islandOne);
};

const findBridge = (grid, queue, visited) => {
  while (queue.length) {
    const [coordinateString, distance] = queue.shift();

    let [r, c] = coordinateString.split(',');
    r *= 1;
    c *= 1;

    const neighbors = getNeighbors(grid, r, c);

    for (const [row, col] of neighbors) {
      const coordStr = row + ',' + col;
      if (visited.has(coordStr)) continue;
      if (grid[row][col] === 'L') return distance;

      visited.add(coordStr);
      queue.push([coordStr, distance + 1]);
    }
  }
};

const exporeFirstIsland = (grid, r, c, islandOne) => {
  if (islandOne.has(r + ',' + c)) return;
  if (grid[r][c] === 'W') return;

  islandOne.add(r + ',' + c);

  const neighbors = getNeighbors(grid, r, c);

  for (const [row, col] of neighbors) {
    exporeFirstIsland(grid, row, col, islandOne);
  }
};

const getNeighbors = (grid, r, c) => {
  const neighbors = [];

  if (r - 1 >= 0) neighbors.push([r - 1, c]);
  if (r + 1 < grid.length) neighbors.push([r + 1, c]);
  if (c - 1 >= 0) neighbors.push([r, c - 1]);
  if (c + 1 < grid[r].length) neighbors.push([r, c + 1]);

  return neighbors;
};
