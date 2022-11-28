import {
  customElement,
  html,
  inject,
  MetaElement,
} from '@pinser-metaverse/core';
import { RouterProvider } from '@pinser-metaverse/router';
import { routes } from './pinser.routes';
import '@pinser-metaverse/screen-shared';
import '@pinser-metaverse/teleport';
import { PinserProvider } from './pinser.provider';

@customElement('pinser-metaverse', {
  providers: [RouterProvider, PinserProvider],
})
export class PinserMetaverseSpaceElement extends MetaElement {
  @inject()
  routerProvider: RouterProvider;

  override init(): void {
    this.routerProvider.setRoutes(routes);
  }

  override render() {
    return html`
      <meta-router-outlet></meta-router-outlet>

      <a-plane
        rotation="-90 0 0"
        selectable
        placing
        width="30"
        height="30"
        visible="false"
        static-body="shape: none;"
        collision-filter="group: surface;"
        shape="shape: box; halfExtents: 15 15 0.001"
        collision-filter="group: surface;"
      ></a-plane>

      <meta-teleportable
        width="0.001"
        height="0.001"
        position="0 100 0"
        visible="false"
      ></meta-teleportable>
    `;
  }
}
