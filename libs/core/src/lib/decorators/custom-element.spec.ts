import 'jest-canvas-mock';
import { customElement } from './custom-element';

describe('customElement', () => {
  it('should to be a function', () => {
    expect(typeof customElement).toBe('function');
  });
});
