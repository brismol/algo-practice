class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const leafList = (root) => {
  const leafs = [];

  const stack = [root];

  while (stack.length) {
    const current = stack.pop();
    if (!current) continue;
    if (!current.left && !current.right) {
      leafs.push(current.val);
      continue;
    }
    stack.push(current.right, current.left);
  }

  return leafs;
};
