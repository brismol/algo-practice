class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const pathFinder = (root, target) => {
  if (!root) return null;
  if (root.val === target) return [target];

  const left = pathFinder(root.left, target);

  if (left) {
    left.unshift(root.val);
    return left;
  }
  const right = pathFinder(root.right, target);
  if (right) {
    right.unshift(root.val);
    return right;
  }

  return null;
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

console.log(pathFinder(a, 'e')); // -> [ 'a', 'b', 'e' ]
