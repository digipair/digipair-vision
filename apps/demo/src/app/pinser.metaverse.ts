import {
  customElement,
  html,
  inject,
  MetaElement,
} from '@digipair-vision/core';
import { PlayerProvider } from '@digipair-vision/player';
import { RouterProvider } from '@digipair-vision/router';
import '@digipair-vision/screen-shared';
import '@digipair-vision/teleport';
import { routes } from './pinser.routes';
import { SessionProvider } from './session.provider';

@customElement('digipair-vision', {
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
        width="100"
        height="100"
        position="0 0.001 0"
        visible="false"
      ></meta-teleportable>
    `;
  }
}
