const largestComponent = (graph) => {
  const visited = new Set();

  let largest = 0;

  for (const n in graph) {
    const compSize = exploreTally(graph, n, visited);
    if (compSize > largest) largest = compSize;
  }

  return largest;
};

const exploreTally = (graph, origin, visited) => {
  let tally = 0;

  if (visited.has(origin + '')) return tally;

  visited.add(origin + '');

  tally++;

  for (const n of graph[origin]) {
    tally += exploreTally(graph, n, visited);
  }

  return tally;
};
