import {
  customElement,
  MetaElement,
  MetaProvider,
} from '@pinser-metaverse/core';
import {
  PreventAndRedirectCommands,
  Router,
  RouterLocation,
} from '@vaadin/router';

declare const AFRAME: any;

export const routeElement =
  <P extends typeof MetaProvider>(
    elementName: string,
    _options?: { networked?: boolean; providers?: P[] }
  ) =>
  <E extends typeof MetaElement>(ElementClass: E) => {
    customElement('meta-route-child-' + elementName, _options)(ElementClass);

    AFRAME.registerComponent(elementName, {
      init: function (): void {
        this.el.innerHTML = `<meta-route-child-${elementName}></meta-route-child-${elementName}>`;
      },
    });
    AFRAME.registerPrimitive(elementName, { defaultComponents: { [elementName]: '' } });

    AFRAME.primitives.primitives[elementName]['prototype'].onBeforeEnter = (
      _location: RouterLocation,
      commands: PreventAndRedirectCommands,
      router: Router
    ) => {
      if ((router as any).__outlet.querySelector(`:scope > ${elementName}`)) {
        return commands.prevent();
      }

      return;
    };
  };
