import { maxNumber } from './index';

describe('max_number', () => {
  describe('given an empty array', () => {
    it('returns 0', () => {
      expect(maxNumber([])).toEqual(0);
    });
  });

  describe('given an array of numbers', () => {
    it('retunrs the max number', () => {
      expect(maxNumber([1, 2, 3])).toEqual(3);
    });
  });
});
