const safeCracking = (hints) => {
  const graph = buildGraph(hints);
  const reverseOrder = [];
  const visited = new Set();

  for (const node in graph) {
    depthFirst(graph, reverseOrder, node, visited);
  }

  return reverseOrder.reverse().join('');
};

const depthFirst = (graph, order, node, visited) => {
  if (visited.has(node * 1)) return;
  visited.add(node * 1);

  for (const neighbor of graph[node]) {
    depthFirst(graph, order, neighbor, visited);
  }

  order.push(node);
};

const buildGraph = (hints) => {
  const graph = {};

  for (const [pre, post] of hints) {
    graph[pre] = graph[pre] || [];
    graph[post] = graph[post] || [];
    graph[pre].push(post);
  }

  return graph;
};
