import { SinglePropertySchema } from 'aframe';
import { MetaElement } from '../classes/meta-element';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const NAF: any;

interface Action {
  timer: number;
  properties: { [key: string]: string };
}
const actions = new Map<MetaElement, Action>();

export const internalProperty =
  () => (target: MetaElement, property: string) => {
    if (!(target.constructor as typeof MetaElement).__INTERNAL_PROPERTIES__) {
      (target.constructor as typeof MetaElement).__INTERNAL_PROPERTIES__ = [];
    }
    (target.constructor as typeof MetaElement).__INTERNAL_PROPERTIES__.push(
      property
    );

    if (!(target.constructor as typeof MetaElement).schema) {
      (target.constructor as typeof MetaElement).schema = {};
    }
    (
      (target.constructor as typeof MetaElement).schema as {
        [key: string]: SinglePropertySchema<unknown>;
      }
    )[property] = {
      type: 'string',
    };

    Object.defineProperty(target, property, {
      get() {
        return JSON.parse(this.data[property]);
      },
      set(value: unknown) {
        if (!this.constructor.schema[property].default) {
          this.constructor.schema[property].default = JSON.stringify(value);
        }

        if (!this.__AFRAME_INSTANCE__) {
          return;
        }

        const action = actions.get(this) || {
          timer: 0,
          properties: [],
        };

        if (action.timer) {
          clearTimeout(action.timer);
        }

        (action.properties as any)[property] = JSON.stringify(value);
        action.timer = setTimeout(() => {
          this.el.setAttribute(
            this.constructor.__ELEMENT_NAME__,
            action.properties
          );
          actions.delete(this);
        }, 100) as unknown as number;

        if (
          NAF &&
          this.constructor.__NETWORKED__ &&
          NAF.connection.isConnected() &&
          !NAF.utils.isMine(this.el)
        ) {
          NAF.utils.takeOwnership(this.el);
        }
      },
      enumerable: true,
      configurable: true,
    });
  };
