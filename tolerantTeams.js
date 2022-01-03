const tolerantTeams = (rivalries) => {
  const graph = buildGraph(rivalries);

  const teams = {};

  for (const rival in graph) {
    if (rival in teams) continue;
    if (!divideTeams(graph, rival, teams, false)) {
      return false;
    }
  }

  return true;
};

const divideTeams = (graph, rival, teams, currentTeam) => {
  if (rival in teams) return teams[rival] === currentTeam;

  teams[rival] = currentTeam;

  for (const neighbor of graph[rival]) {
    if (!divideTeams(graph, neighbor, teams, !currentTeam)) {
      return false;
    }
  }

  return true;
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
