/* eslint-disable @typescript-eslint/no-explicit-any */
import { SinglePropertySchema } from 'aframe';
import 'reflect-metadata';
import { MetaElement } from '../classes/meta-element';

export const property =
  (options?: { default: any }) =>
  <T extends MetaElement>(target: T, property: string) => {
    const type = Reflect.getMetadata('design:type', target, property);

    if (!(target.constructor as typeof MetaElement).schema) {
      (target.constructor as typeof MetaElement).schema = {};
    }
    (
      (target.constructor as typeof MetaElement).schema as {
        [key: string]: SinglePropertySchema<unknown>;
      }
    )[property] = {
      ...(options?.default !== undefined
        ? {
            default:
              type === Number || type === Boolean || type === String
                ? options.default
                : JSON.stringify(options.default),
          }
        : {}),
      type:
        type === Number ? 'number' : type === Boolean ? 'boolean' : 'string',
      parse: function (value: number | string) {
        let result: any;

        try {
          result =
            type === String || !value ? value : JSON.parse(value as string);
        } catch (e) {
          result = value;
        }

        return result;
      },
    };

    Object.defineProperty(target, property, {
      get() {
        return this.data[property];
      },
      enumerable: true,
      configurable: true,
    });
  };
