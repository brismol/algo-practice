const topologicalOrder = (graph) => {
  const order = [];

  const visited = new Set();

  for (const node in graph) {
    depthFirst(graph, node, order, visited);
  }

  return order.reverse();
};

const depthFirst = (graph, node, order, visited) => {
  if (visited.has(node)) return;
  visited.add(node);

  for (const neighbor of graph[node]) {
    depthFirst(graph, neighbor, order, visited);
  }

  order.push(node);
};
