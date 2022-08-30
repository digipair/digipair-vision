import 'reflect-metadata';
import { MetaElement } from '../classes/meta-element';
import { MetaProvider } from '../classes/meta-provider';
import { providers } from '../stores/providers';

export const inject = () => (target: MetaProvider, property: string) => {
  const type = Reflect.getMetadata('design:type', target, property);
  const providersByElement = new Map<MetaElement, MetaProvider>();

  Object.defineProperty(target, property, {
    get() {
      let provider = providersByElement.get(this);

      if (!provider) {
        const name = providers.get(type);
        provider = (
          this.el.closest(`[${name}]`) ||
          this.el.sceneEl.querySelector(`meta-scene-container[${name}]`)
        )?.components[name].__AFRAME_ELEMENT__;

        if (!provider) {
          throw new Error(
            `${name} cannot be injected. May be it is not correctly provided ?`
          );
        }

        const listener = () => {
          this.requestUpdate();
        };
        provider.el.addEventListener('__META_UPDATE__', listener);
        this.__SUBSCRIPTIONS__.push({
          el: provider.el,
          type: '__META_UPDATE__',
          listener,
        });

        providersByElement.set(this, provider);
      }

      return provider;
    },
    enumerable: true,
    configurable: true,
  });
};
