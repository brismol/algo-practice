const linkedListCycle = (head) => {
  const nodes = new Set();

  let current = head;

  while (current) {
    if (nodes.has(current)) return true;
    nodes.add(current);
    current = current.next;
  }

  return false;
};
