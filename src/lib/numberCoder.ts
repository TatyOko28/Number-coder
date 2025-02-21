import { validateNumber, validateCode } from './validation';
import { CONSTANTS } from './types';

export class NumberCoder {
  static encode(number: number): string {
    validateNumber(number);
    
    if (number === 0) {
      return '0'.repeat(CONSTANTS.CODE_LENGTH);
    }

    let result = '';
    let remaining = number;
    const BASE = 36;

    while (remaining > 0) {
      const remainder = remaining % BASE;
      result = CONSTANTS.CHAR_SET[remainder] + result;
      remaining = Math.floor(remaining / BASE);
    }

    return result.padStart(CONSTANTS.CODE_LENGTH, '0');
  }

  static decode(code: string): number {
    validateCode(code);
    
    let result = 0;
    const BASE = 36;

    for (let i = 0; i < code.length; i++) {
      const char = code[i];
      const value = CONSTANTS.CHAR_SET.indexOf(char);
      result = result * BASE + value;
    }
    
    return result;
  }
}