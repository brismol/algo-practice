const connectedComponentsCount = (graph) => {
  const visited = new Set();

  let components = 0;

  for (const n in graph) {
    if (visited.has(n + '')) continue;
    components++;
    explore(graph, n, visited);
  }

  return components;
};

const explore = (graph, origin, visited) => {
  if (visited.has(origin + '')) return;
  visited.add(origin + '');
  for (const n of graph[origin]) {
    explore(graph, n, visited);
  }
};
