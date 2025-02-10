// Description: https://leetcode.com/problems/maximum-ascending-subarray-sum/description/

export function maxAscendingSum(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let sum = nums[0];
  let currentSum = sum;

  for (let i = 1; i < nums.length; i++) {
    const currentNum = nums[i];

    if (nums[i - 1] < currentNum) {
      sum += currentNum;
    } else {
      sum = currentNum;
    }

    if (sum >= currentSum) {
      currentSum = sum;
    }
  }

  return currentSum;
}
