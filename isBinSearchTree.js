const isBinarySearchTree = (root, min = -Infinity, max = Infinity) => {
  if (!root) return true;
  if (root.val > max || root.val < min) return false;

  if (root.left && root.left >= root.val) return false;
  if (root.right && root.right < root.val) return false;

  return (
    isBinarySearchTree(root.left, min, root.val - 1) &&
    isBinarySearchTree(root.right, root.val, max)
  );
};
