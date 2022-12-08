import { html, inject, MetaElement } from '@pinser-metaverse/core';
import { routeElement } from '@pinser-metaverse/router';
import '@pinser-metaverse/gltf';
import '@pinser-metaverse/html';
import { SessionProvider } from '../../../../session.provider';

@routeElement('experiences-home-space')
export class HomeSpaceElement extends MetaElement {
  @inject()
  sessionProvider: SessionProvider;

  override init(): void {
    this.sessionProvider.startSession('fe796725-a6ed-46b3-8ace-25f74a6d80cd');
  }

  override remove(): void {
    this.sessionProvider.stopSession();
  }
  
  override render() {
    return html`
      <a-sky
        hide-on-ar
        material="shader: gradient; topColor: 255 255 255; bottomColor: 0 10 255;"
      ></a-sky>
    `;
  }
}
