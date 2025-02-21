import { ValidationError, CONSTANTS } from './types';

export function validateNumber(num: number): void {
  if (!Number.isInteger(num)) {
    throw new ValidationError('Input must be an integer');
  }
  
  if (num < CONSTANTS.MIN_VALUE || num > CONSTANTS.MAX_VALUE) {
    throw new ValidationError(
      `Number must be between ${CONSTANTS.MIN_VALUE} and ${CONSTANTS.MAX_VALUE}`
    );
  }
}

export function validateCode(code: string): void {
  if (!code || typeof code !== 'string') {
    throw new ValidationError('Code must be a string');
  }

  if (code.length !== CONSTANTS.CODE_LENGTH) {
    throw new ValidationError(`Code must be ${CONSTANTS.CODE_LENGTH} characters long`);
  }

  if (!/^[0-9A-Z]{6}$/.test(code)) {
    throw new ValidationError('Code must contain only uppercase letters (A-Z) and numbers (0-9)');
  }
}