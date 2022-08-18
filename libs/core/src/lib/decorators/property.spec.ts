import { property } from './property';

describe('property', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let Element: any;

  beforeEach(() => {
    Element = class {
      myProperty = undefined;
      data = {
        myProperty: 'hello world',
      };
    };
  });

  it('should to be a function', () => {
    expect(typeof property).toBe('function');
  });

  it('should configure the property getter', () => {
    const instance = new Element();
    property()(instance, 'myProperty');

    expect(instance.myProperty).toBe('hello world');
  });

  it('should add property information in schema', () => {
    const instance = new Element();

    expect(instance.constructor.schema).toBeUndefined();

    property()(instance, 'myProperty');
    expect(instance.constructor.schema).toStrictEqual({
      myProperty: { parse: expect.anything(), type: 'string' },
    });

    property()(instance, 'myProperty2');
    expect(instance.constructor.schema).toStrictEqual({
      myProperty: { parse: expect.anything(), type: 'string' },
      myProperty2: { parse: expect.anything(), type: 'string' },
    });
  });
});
