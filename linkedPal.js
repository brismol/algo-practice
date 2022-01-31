const linkedPalindrome = (head) => {
  const vals = printList(head);

  return checkPal(vals);
};

const checkPal = (vals) => {
  let left = 0;
  let right = vals.length - 1;

  while (left <= right) {
    if (vals[left] !== vals[right]) return false;
    left++;
    right--;
  }

  return true;
};

const printList = (head) => {
  const vals = [];

  let current = head;

  while (current) {
    vals.push(current.val);
    current = current.next;
  }

  return vals;
};
