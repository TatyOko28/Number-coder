export interface NumberCoderOptions {
    maxValue?: number;
    minValue?: number;
  }
  
  export class ValidationError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'ValidationError';
    }
  }
  
  export const CONSTANTS = {
    MAX_VALUE: 2176782335, 
    MIN_VALUE: 0,
    CODE_LENGTH: 6,
    CHAR_SET: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  } as const;