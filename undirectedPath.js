const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);

  const visited = new Set();

  const queue = [nodeA];

  while (queue.length) {
    const current = queue.shift();
    if (current === nodeB) return true;
    visited.add(current);
    for (const child of graph[current]) {
      if (visited.has(child)) continue;
      queue.push(child);
    }
  }

  return false;
};

const buildGraph = (edges) => {
  const graph = {};

  for (const [left, right] of edges) {
    graph[left] = graph[left] || [];
    graph[right] = graph[right] || [];
    graph[right].push(left);
    graph[left].push(right);
  }

  return graph;
};
