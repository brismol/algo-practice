const leftyNodes = (root, level = 0, leftys = []) => {
  if (!root) return leftys;

  if (!leftys[level]) leftys.push(root.val);

  leftyNodes(root.left, level + 1, leftys);
  leftyNodes(root.right, level + 1, leftys);

  return leftys;
};
