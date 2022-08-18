import 'jest-canvas-mock';
import { injectable } from './injectable';

describe('injectable', () => {
  it('should to be a function', () => {
    expect(typeof injectable).toBe('function');
  });
});
