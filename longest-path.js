const longestPath = (graph) => {
  const distances = {};

  for (const n in graph) {
    if (graph[n].length === 0) distances[n] = 0;
  }

  for (const n in graph) {
    explore(graph, n, distances);
  }

  return Math.max(...Object.values(distances));
};

const explore = (graph, origin, distances) => {
  if (origin in distances) return distances[origin];

  let max = 0;

  for (const neighbor of graph[origin]) {
    const attempt = explore(graph, neighbor, distances);
    if (attempt > max) max = attempt;
  }

  distances[origin] = max + 1;
  return distances[origin];
};
