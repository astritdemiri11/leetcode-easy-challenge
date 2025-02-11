import { applyOperations } from './apply-operations-to-an-array';

describe('applyOperations', () => {
  test('nums[i] == nums[i + 1], then multiply nums[i] by 2 and set nums[i + 1] to 0. Otherwise, you skip this operation.', () => {
    expect(applyOperations([1, 2, 2, 1, 1, 0])).toStrictEqual([
      1, 4, 2, 0, 0, 0,
    ]);
    expect(applyOperations([0, 1])).toStrictEqual([1, 0]);
  });
});
