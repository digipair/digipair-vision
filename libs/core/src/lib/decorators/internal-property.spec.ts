import { internalProperty } from './internal-property';

describe('internalProperty', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let Element: any;

  beforeEach(() => {
    Element = class {
      static __ELEMENT_NAME__ = 'my-element';
      myProperty = undefined;
      el = {
        setAttribute: jest.fn(),
      };
      data = {
        myInternalProperty: '"hello world"',
      };
    };
  });

  it('should to be a function', () => {
    expect(typeof internalProperty).toBe('function');
  });

  it('should add property in __INTERNAL_PROPERTIES__', () => {
    const instance = new Element();

    expect(instance.constructor.__INTERNAL_PROPERTIES__).toBeUndefined();

    internalProperty()(instance, 'myInternalProperty');
    expect(instance.constructor.__INTERNAL_PROPERTIES__).toStrictEqual([
      'myInternalProperty',
    ]);

    internalProperty()(instance, 'myInternalProperty2');
    expect(instance.constructor.__INTERNAL_PROPERTIES__).toStrictEqual([
      'myInternalProperty',
      'myInternalProperty2',
    ]);
  });

  it('should configure the property getter', () => {
    const instance = new Element();
    internalProperty()(instance, 'myInternalProperty');

    expect(instance.myInternalProperty).toBe('hello world');
  });

  it('should configure the property setter', () => {
    const instance = new Element();
    internalProperty()(instance, 'myInternalProperty');

    instance.myInternalProperty = 42;
    expect(instance.constructor.schema.myInternalProperty).toStrictEqual({
      default: '42',
      type: 'string',
    });
    expect(instance.el.setAttribute).toBeCalledTimes(0);

    instance.__AFRAME_INSTANCE__ = {};
    instance.myInternalProperty = 42;
    expect(instance.el.setAttribute).toHaveBeenNthCalledWith(1, 'my-element', 'myInternalProperty', '42');
  });

  it('should add property information in schema', () => {
    const instance = new Element();

    expect(instance.constructor.schema).toBeUndefined();

    internalProperty()(instance, 'myInternalProperty');
    expect(instance.constructor.schema).toStrictEqual({
      myInternalProperty: { type: 'string' },
    });

    internalProperty()(instance, 'myInternalProperty2');
    expect(instance.constructor.schema).toStrictEqual({
      myInternalProperty: { type: 'string' },
      myInternalProperty2: { type: 'string' },
    });
  });
});
