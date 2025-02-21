export class NumberCoderError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'NumberCoderError';
      Object.setPrototypeOf(this, NumberCoderError.prototype);
    }
  }
  
  export class ValidationError extends NumberCoderError {
    constructor(message: string) {
      super(message);
      this.name = 'ValidationError';
      Object.setPrototypeOf(this, ValidationError.prototype);
    }
  }
  
  export class EncodingError extends NumberCoderError {
    constructor(message: string) {
      super(message);
      this.name = 'EncodingError';
      Object.setPrototypeOf(this, EncodingError.prototype);
    }
  }
  
  export class DecodingError extends NumberCoderError {
    constructor(message: string) {
      super(message);
      this.name = 'DecodingError';
      Object.setPrototypeOf(this, DecodingError.prototype);
    }
  }
  