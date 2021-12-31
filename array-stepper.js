const arrayStepper = (nums, i = 0, memo = {}) => {
  if (i in memo) return memo[i];
  if (i === nums.length - 1) return true;
  if (i >= nums.length) return false;

  for (let step = 1; step <= nums[i]; step++) {
    if (arrayStepper(nums, i + step, memo)) {
      memo[i] = true;
      return true;
    }
  }

  memo[i] = false;
  return false;
};
