const semestersRequired = (numCourses, prereqs) => {
  if (!prereqs.length) return 1;
  const graph = buildGraph(prereqs);
  const semesters = {};

  for (const cl in graph) {
    if (graph[cl].length === 0) semesters[cl] = 1;
  }

  for (const cl in graph) {
    explore(graph, cl, semesters);
  }

  return Math.max(...Object.values(semesters));
};

const buildGraph = (prereqs) => {
  const graph = {};

  for (const [pre, post] of prereqs) {
    graph[pre] = graph[pre] || [];
    graph[post] = graph[post] || [];
    graph[pre].push(post);
  }

  return graph;
};

const explore = (graph, cl, semesters) => {
  if (cl in semesters) return semesters[cl];

  let max = 0;

  for (const neighbor of graph[cl]) {
    const attempt = explore(graph, neighbor, semesters);
    if (attempt > max) max = attempt;
  }

  semesters[cl] = max + 1;
  return semesters[cl];
};
