const middleValue = (head) => {
  let count = 0;

  let current = head;

  while (current) {
    count++;
    current = current.next;
  }

  const placeValue = Math.floor(count / 2) + 1;

  count = 0;
  current = head;
  while (current) {
    count++;
    if (count === placeValue) return current.val;
    current = current.next;
  }
};
