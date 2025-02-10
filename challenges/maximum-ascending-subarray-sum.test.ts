import { maxAscendingSum } from './maximum-ascending-subarray-sum';

describe('maxAscendingSum', () => {
  test('maximum ascending subarray sum', () => {
    expect(maxAscendingSum([10, 20, 30, 5, 10, 50])).toBe(65);
    expect(maxAscendingSum([10, 20, 30, 40, 50])).toBe(150);
    expect(maxAscendingSum([12, 17, 15, 13, 10, 11, 12])).toBe(33);
    expect(maxAscendingSum([3, 6, 10, 1, 8, 9, 9, 8, 9])).toBe(19);
  });
});
