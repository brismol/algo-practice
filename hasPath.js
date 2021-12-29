const hasPath = (graph, src, dst) => {
  const queue = [src];

  while (queue.length) {
    const current = queue.shift();
    if (current === dst) return true;
    for (const child of graph[current]) {
      queue.push(child);
    }
  }

  return false;
};
