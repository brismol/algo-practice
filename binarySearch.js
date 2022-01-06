const binarySearch = (
  numbers,
  target,
  left = 0,
  right = numbers.length - 1
) => {
  if (left > right) return -1;

  const midIdx = Math.floor((left + right) / 2);

  if (target < numbers[midIdx])
    return binarySearch(numbers, target, left, midIdx - 1);
  if (target > numbers[midIdx])
    return binarySearch(numbers, target, midIdx + 1, right);
  return midIdx;
};
