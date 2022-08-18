import { Component } from 'aframe';
import { MetaProvider } from '../classes/meta-provider';
import { providers } from '../stores/providers';

const { registerComponent, THREE } = AFRAME;

export const injectable =
  (_options?: { networked?: boolean }) =>
  <T extends typeof MetaProvider>(ElementClass: T) => {
    const options = {
      networked: false,
      ..._options,
    };

    const elementName = `_${THREE.MathUtils.generateUUID().toLowerCase()}`;
    providers.set(ElementClass, elementName);

    ElementClass.__ELEMENT_NAME__ = elementName;
    ElementClass.__NETWORKED__ = options.networked;
    ElementClass.__INTERNAL_PROPERTIES__ =
      ElementClass.__INTERNAL_PROPERTIES__ || [];
    ElementClass.schema = ElementClass.schema || {};
    ElementClass.dependencies = ElementClass.dependencies || [];
    ElementClass.multiple = false;
    ElementClass.mappings = ElementClass.mappings || {};

    const instances = new Map<Component, MetaProvider>();

    const getInstance = (aframeInstance: Component) => {
      let instance = instances.get(aframeInstance);

      if (!instance) {
        instance = new ElementClass();
        (
          aframeInstance as unknown as { __AFRAME_ELEMENT__: MetaProvider }
        ).__AFRAME_ELEMENT__ = instance;
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
        getInstance(this as Component).el.dispatchEvent(
          new CustomEvent('__META_UPDATE__')
        );
      },
    };

    registerComponent(elementName, aFrameElementDefinition);
  };
