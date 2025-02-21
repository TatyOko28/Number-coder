import { NumberCoder } from '../lib/numberCoder';

describe('NumberCoder Performance', () => {
  it('should handle multiple encode/decode operations efficiently', () => {
    const startTime = performance.now();
    const iterations = 1000;
    
    for (let i = 0; i < iterations; i++) {
      const num = Math.floor(Math.random() * 1000000);
      const encoded = NumberCoder.encode(num);
      const decoded = NumberCoder.decode(encoded);
      expect(decoded).toBe(num);
    }
    
    const endTime = performance.now();
    const duration = endTime - startTime;
    
  
    expect(duration).toBeLessThan(1000);
  });
});