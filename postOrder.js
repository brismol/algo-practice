const postOrder = (root, order = []) => {
  if (!root) return order;

  postOrder(root.left, order);
  postOrder(root.right, order);

  order.push(root.val);
  return order;
};
