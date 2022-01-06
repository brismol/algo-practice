const binarySearchTreeIncludes = (root, target) => {
  if (!root) return false;

  if (target < root.val) return binarySearchTreeIncludes(root.left, target);
  if (target > root.val) return binarySearchTreeIncludes(root.right, target);
  return true;
};
