import { NumberCoder } from '../lib/numberCoder';
import { ValidationError, CONSTANTS } from '../lib/types';

describe('NumberCoder', () => {
  describe('encode', () => {
    it('should encode 0 to "000000"', () => {
      expect(NumberCoder.encode(0)).toBe('000000');
    });

    it('should encode single-digit numbers correctly', () => {
      expect(NumberCoder.encode(1)).toBe('000001');
      expect(NumberCoder.encode(9)).toBe('000009');
    });

    it('should encode double-digit numbers correctly', () => {
      expect(NumberCoder.encode(10)).toBe('00000A');
      expect(NumberCoder.encode(35)).toBe('00000Z');
    });

    it('should encode larger numbers correctly', () => {
      expect(NumberCoder.encode(36)).toBe('000010');
      expect(NumberCoder.encode(1000)).toBe('0000RS');
      expect(NumberCoder.encode(100000)).toBe('000RN8');
    });

    it('should encode maximum value correctly', () => {
      expect(NumberCoder.encode(CONSTANTS.MAX_VALUE)).toBe('ZZZZZZ');
    });

    it('should throw error for invalid numbers', () => {
      expect(() => NumberCoder.encode(-1)).toThrow(ValidationError);
      expect(() => NumberCoder.encode(CONSTANTS.MAX_VALUE + 1)).toThrow(ValidationError);
      expect(() => NumberCoder.encode(3.14)).toThrow(ValidationError);
    });
  });
});
