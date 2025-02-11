// Description: https://leetcode.com/problems/apply-operations-to-an-array/description/

export function applyOperations(nums: number[]): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      continue;
    }

    nums[i] *= 2;
    nums[i + 1] = 0;
  }

  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];
      nonZeroIndex++;
    }
  }

  return nums;
}

