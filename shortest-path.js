const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);

  return findPath(graph, nodeA, nodeB, new Set());
};

const buildGraph = (edges) => {
  const graph = {};

  for (const [a, b] of edges) {
    graph[a] = graph[a] || [];
    graph[b] = graph[b] || [];
    graph[b].push(a);
    graph[a].push(b);
  }

  return graph;
};

const findPath = (graph, origin, dest, visited) => {
  const queue = [[origin, 0]];

  while (queue.length) {
    const [current, distance] = queue.shift();
    if (current === dest) return distance;
    if (visited.has(current)) continue;
    visited.add(current);

    for (const n of graph[current]) {
      queue.push([n, distance + 1]);
    }
  }

  return -1;
};
