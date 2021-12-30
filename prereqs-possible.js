const prereqsPossible = (numCourses, prereqs) => {
  const graph = buildGraph(prereqs);

  const grey = new Set(); //grey is visiting
  const black = new Set(); //black is finished

  for (const node in graph) {
    if (detectLoop(graph, node, grey, black)) return false;
  }

  return true;
};

const detectLoop = (graph, node, grey, black) => {
  if (black.has(node)) return false;
  if (grey.has(node)) return true;

  grey.add(node);

  for (const neighbor of graph[node]) {
    if (detectLoop(graph, neighbor, grey, black)) return true;
  }

  black.add(node);
  return false;
};

const buildGraph = (edges) => {
  const graph = {};

  for (const [left, right] of edges) {
    graph[left] = graph[left] || [];
    graph[right] = graph[right] || [];
    graph[left].push(right);
  }

  return graph;
};
