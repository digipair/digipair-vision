import { html, inject, MetaElement } from '@pinser-metaverse/core';
import { routeElement } from '@pinser-metaverse/router';
import '@pinser-metaverse/gltf';
import { SessionProvider } from '../../../../session.provider';

@routeElement('experiences-mixed-reality-space')
export class MixedRealitySpaceElement extends MetaElement {
  @inject()
  sessionProvider: SessionProvider;

  override init(): void {
    this.sessionProvider.startSession('1f05a1b5-7055-40c0-806a-b0df40b0ac31');
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

      <meta-gltf
        position="1 0.245 0.9"
        url="https://agency-experiences.onrender.com/assets/spaces/experiences/cabine.glb"
      ></meta-gltf>
    `;
  }
}
