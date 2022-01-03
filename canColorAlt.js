const canColor = (graph) => {
  const colors = {};

  for (const node in graph) {
    if (node in colors) continue;
    if (!depthFirst(graph, node, colors, 'yellow')) return false;
  }

  return true;
};

const depthFirst = (graph, node, colors, color) => {
  if (colors[node] === color) return true;
  if (node in colors) return false;

  colors[node] = color;

  const nextColor = color === 'yellow' ? 'orange' : 'yellow';

  for (const neighbor of graph[node]) {
    if (!depthFirst(graph, neighbor, colors, nextColor)) return false;
  }

  return true;
};
