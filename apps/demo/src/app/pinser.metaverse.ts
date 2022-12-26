import {
  customElement,
  html,
  inject,
  MetaElement,
} from '@pinser-metaverse/core';
import { PlayerProvider } from '@pinser-metaverse/player';
import { RouterProvider } from '@pinser-metaverse/router';
import '@pinser-metaverse/screen-shared';
import '@pinser-metaverse/teleport';
import { routes } from './pinser.routes';
import { SessionProvider } from './session.provider';

@customElement('pinser-metaverse', {
  providers: [RouterProvider, SessionProvider],
})
export class PinserMetaverseSpaceElement extends MetaElement {
  @inject()
  playerProvider: PlayerProvider;

  @inject()
  routerProvider: RouterProvider;

  override init(): void {
    this.routerProvider.setRoutes(routes);

    this.playerProvider.setInfo({
      username: localStorage.getItem('username') || 'Visiteur',
      avatar: localStorage.getItem('avatar') || '/assets/visitor.glb',
      preview: localStorage.getItem('preview') || '/assets/visitor.png',
    });
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
