const nonAdjacentSum = (nums, i = 0, memo = {}) => {
  if (i in memo) return memo[i];
  if (i === nums.length) return -Infinity;
  if (i === nums.length - 1) return nums[i];
  if (i === nums.length - 2) return Math.max(nums[i], nums[i + 1]);

  memo[i] = Math.max(
    nonAdjacentSum(nums, i + 1, memo),
    nonAdjacentSum(nums, i + 2, memo) + nums[i]
  );
  return memo[i];
};
