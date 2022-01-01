const canColor = (graph) => {
  const colors = {};

  for (const node in graph) {
    if (!depthFirst(graph, node, colors)) return false;
  }

  return true;
};

const depthFirst = (graph, node, colors) => {
  if (node in colors) return true;

  const neighborColors = new Set();

  for (const neighbor of graph[node]) {
    if (neighbor in colors) neighborColors.add(colors[neighbor]);
  }

  if (neighborColors.size > 1) return false;

  if (neighborColors.has('yellow')) {
    colors[node] = 'orange';
  } else {
    colors[node] = 'yellow';
  }

  for (const neighbor of graph[node]) {
    if (!depthFirst(graph, neighbor, colors)) return false;
  }

  return true;
};
