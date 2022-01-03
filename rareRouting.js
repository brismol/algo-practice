const rareRouting = (numOfCities, roads) => {
  const graph = buildGraph(roads);

  const inProgress = new Set();
  const finished = new Set();

  const citiesVisited = [0];

  for (const city in graph) {
    const search = findCycle(graph, city, inProgress, finished, citiesVisited);
    if (search) return false;
    if (citiesVisited[0] - 1 !== numOfCities) return false;
    return true;
  }
};

const findCycle = (
  graph,
  city,
  inProgress,
  finished,
  citiesVisited,
  previousCity
) => {
  if (finished.has(city)) return false;
  if (inProgress.has(city)) return true;

  inProgress.add(city);

  for (const neighbor of graph[city]) {
    if (neighbor === previousCity) continue;
    if (findCycle(graph, neighbor, inProgress, finished, citiesVisited, city)) {
      return true;
    }
  }
  finished.add(city);
  citiesVisited[0]++;

  return false;
};

const buildGraph = (edges) => {
  const graph = {};

  for (const [left, right] of edges) {
    graph[left] = graph[left] || [];
    graph[right] = graph[right] || [];
    graph[left].push(right);
    graph[right].push(left);
  }

  return graph;
};
