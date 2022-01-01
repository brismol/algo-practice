const linkedPalindrome = (head) => {
  if (!head) return true;
  const vals = [];
  let current = head;
  while (current) {
    vals.push(current.val);
    current = current.next;
  }

  let left = Math.floor((vals.length - 1) / 2);
  let right = Math.ceil((vals.length - 1) / 2);

  while (left >= 0) {
    if (vals[left] !== vals[right]) return false;
    left--;
    right++;
  }
  return true;
};
