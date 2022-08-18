import { Component, SinglePropertySchema } from 'aframe';
import { MetaElement } from '../classes/meta-element';
import { MetaProvider } from '../classes/meta-provider';
import '../components/networked-element';
import { providers } from '../stores/providers';

const { registerComponent, registerPrimitive } = AFRAME;

export const customElement =
  <P extends typeof MetaProvider>(
    elementName: string,
    _options?: { networked?: boolean; providers?: P[] }
  ) =>
  <E extends typeof MetaElement>(ElementClass: E) => {
    const instances = new Map<Component, MetaElement>();
    const options = {
      networked: false,
      providers: [],
      ..._options,
    };

    ElementClass.__ELEMENT_NAME__ = elementName;
    ElementClass.__NETWORKED__ = options.networked;
    ElementClass.__INTERNAL_PROPERTIES__ =
      ElementClass.__INTERNAL_PROPERTIES__ || [];
    ElementClass.schema = ElementClass.schema || {};
    ElementClass.dependencies = ElementClass.dependencies || [];
    ElementClass.multiple = false;
    ElementClass.mappings = ElementClass.mappings || {};

    const getInstance = (aframeInstance: Component) => {
      let instance = instances.get(aframeInstance);

      if (!instance) {
        instance = new ElementClass();
        instance.__AFRAME_INSTANCE__ = aframeInstance;
        instances.set(aframeInstance, instance);
      }
      return instance;
    };

    const aFrameElementDefinition = {
      get schema() {
        return ElementClass.schema;
      },
      get dependencies() {
        return ElementClass.dependencies;
      },
      get multiple() {
        return ElementClass.multiple;
      },
      init: function (data?: unknown): void {
        getInstance(this as Component).init(data);
      },
      pause: function (): void {
        getInstance(this as Component).pause();
      },
      play: function (): void {
        getInstance(this as Component).play();
      },
      remove: function (): void {
        getInstance(this as Component).remove();
        instances.delete(this as Component);
      },
      tick: function (time: number, timeDelta: number): void {
        getInstance(this as Component).tick(time, timeDelta);
      },
      tock: function (
        time: number,
        timeDelta: number,
        camera: THREE.Camera
      ): void {
        getInstance(this as Component).tock(time, timeDelta, camera);
      },
      updateSchema: function (): void {
        getInstance(this as Component).updateSchema();
      },
      update: function (oldData: unknown): void {
        getInstance(this as Component).update(oldData);
        getInstance(this as Component).requestUpdate();
      },
    };

    registerComponent(elementName, aFrameElementDefinition);

    const networkedProviders = options.providers
      .filter((provider) => provider.__NETWORKED__)
      .map((key) => ({
        component: providers.get(key),
        properties: Object.keys(key.schema).filter(
          (property) =>
            !!(
              key.schema as {
                [key: string]: SinglePropertySchema<unknown>;
              }
            )[property].default
        ),
      }));

    if (options.networked || networkedProviders.length > 0) {
      registerPrimitive(`${elementName}`, {
        defaultComponents: {
          'networked-element': {
            element: elementName,
            providers: options.providers.map((key) => providers.get(key)),
            networkedElements: [
              ...(!options.networked
                ? []
                : ElementClass.__INTERNAL_PROPERTIES__.map(
                    (property: string) => ({
                      component: elementName,
                      property,
                    })
                  )),
              ...options.providers
                .filter((provider) => provider.__NETWORKED__)
                .map((provider) => ({
                  component: providers.get(provider),
                  properties: provider.__INTERNAL_PROPERTIES__,
                }))
                .flat(),
            ],
          },
        },
        get mappings() {
          return Object.assign(
            {},
            ...Object.keys(ElementClass.schema).map((key) => ({
              [`${key}`]: `${elementName}.${key}`,
            }))
          );
        },
      });
    } else {
      registerPrimitive(`${elementName}`, {
        defaultComponents: {
          [elementName]: {},
          ...Object.fromEntries(
            options.providers.map((key) => [providers.get(key), {}])
          ),
        },
        get mappings() {
          return Object.assign(
            {},
            ...Object.keys(ElementClass.schema).map((key) => ({
              [`${key}`]: `${elementName}.${key}`,
            }))
          );
        },
      });
    }
  };
