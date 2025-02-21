import { validateNumber, validateCode } from '../lib/validation';
import { ValidationError, CONSTANTS } from '../lib/types';

describe('Validation', () => {
  describe('validateCode', () => {
    it('should throw error for non-string inputs', () => {
      expect(() => validateCode(null as any)).toThrow(ValidationError);
      expect(() => validateCode(undefined as any)).toThrow(ValidationError);
      expect(() => validateCode(123 as any)).toThrow(ValidationError);
      expect(() => validateCode('' as any)).toThrow(ValidationError);
    });

    it('should throw error for incorrect length', () => {
      expect(() => validateCode('ABC')).toThrow(ValidationError);
      expect(() => validateCode('ABCDEFG')).toThrow(ValidationError);
      expect(() => validateCode('12345')).toThrow(ValidationError);
    });

    it('should throw error for invalid characters', () => {
      expect(() => validateCode('ABCDEa')).toThrow(ValidationError);
      expect(() => validateCode('ABCD#$')).toThrow(ValidationError);
      expect(() => validateCode('ABC DE')).toThrow(ValidationError);
    });

    it('should not throw for valid codes', () => {
      expect(() => validateCode('123456')).not.toThrow();
      expect(() => validateCode('ABCDEF')).not.toThrow();
      expect(() => validateCode('A1B2C3')).not.toThrow();
    });
  });

  describe('validateNumber', () => {
    it('should throw error for non-integer numbers', () => {
      expect(() => validateNumber(3.14)).toThrow(ValidationError);
      expect(() => validateNumber(-1.5)).toThrow(ValidationError);
    });

    it('should throw error for numbers out of range', () => {
      expect(() => validateNumber(-1)).toThrow(ValidationError);
      expect(() => validateNumber(CONSTANTS.MAX_VALUE + 1)).toThrow(ValidationError);
    });

    it('should not throw for valid numbers', () => {
      expect(() => validateNumber(0)).not.toThrow();
      expect(() => validateNumber(CONSTANTS.MAX_VALUE)).not.toThrow();
      expect(() => validateNumber(123456)).not.toThrow();
    });
  });
});