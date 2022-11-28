import { html, MetaElement } from '@pinser-metaverse/core';
import { routeElement } from '@pinser-metaverse/router';
import '@pinser-metaverse/gltf';
import '@pinser-metaverse/html';

@routeElement('experiences-home-space')
export class HomeSpaceElement extends MetaElement {
  override render() {
    return html`
      <a-sky
        hide-on-ar
        material="shader: gradient; topColor: 255 255 255; bottomColor: 0 10 255;"
      ></a-sky>
    `;
  }
}
