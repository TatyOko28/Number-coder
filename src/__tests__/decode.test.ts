import { NumberCoder } from '../lib/numberCoder';
import { ValidationError } from '../lib/types';

describe('NumberCoder', () => {
  describe('decode', () => {
    it('should decode "000000" to 0', () => {
      expect(NumberCoder.decode('000000')).toBe(0);
    });

    it('should decode single-character codes correctly', () => {
      expect(NumberCoder.decode('000001')).toBe(1);
      expect(NumberCoder.decode('000009')).toBe(9);
      expect(NumberCoder.decode('00000A')).toBe(10);
      expect(NumberCoder.decode('00000Z')).toBe(35);
    });

    it('should decode multi-character codes correctly', () => {
      expect(NumberCoder.decode('000010')).toBe(36);
      expect(NumberCoder.decode('0000RS')).toBe(1000);
      expect(NumberCoder.decode('000RN8')).toBe(100000);
    });

    it('should decode maximum value correctly', () => {
      expect(NumberCoder.decode('ZZZZZZ')).toBe(2176782335);
    });

    it('should throw error for invalid codes', () => {
      expect(() => NumberCoder.decode('12345')).toThrow(ValidationError); 
      expect(() => NumberCoder.decode('1234567')).toThrow(ValidationError); 
      expect(() => NumberCoder.decode('12345a')).toThrow(ValidationError); 
      expect(() => NumberCoder.decode('12@456')).toThrow(ValidationError); 
    });
  });
});
