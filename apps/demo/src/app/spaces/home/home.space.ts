import { html, MetaElement } from '@pinser-metaverse/core';
import '@pinser-metaverse/gltf';
import '@pinser-metaverse/html';
import { routeElement } from '@pinser-metaverse/router';
import './title.element';

@routeElement('home-space')
export class HomeSpaceElement extends MetaElement {
  override render() {
    return html`
      <a-sky
        hide-on-ar
        material="shader: gradient; topColor: 255 255 255; bottomColor: 0 10 255;"
      ></a-sky>

      <meta-html position="-0.23 1.8 -1" scale="1 1 1" width="450px">
        <template>
          <home-title></home-title>
        </template>
      </meta-html>

      <meta-gltf
        position="0.268 1.4 -1"
        rotation="0 0 0"
        scale="0.1 0.1 0.1"
        url="https://agency-experiences.onrender.com/assets/spaces/home/home.glb"
      ></meta-gltf>

      <meta-gltf
        url="https://agency-experiences.onrender.com/assets/man.glb"
        animations="https://agency-experiences.onrender.com/assets/animations.glb"
        playing="clip: IDLE;"
        position="0.052 1.388 -0.98"
        scale="0.15 0.15 0.15"
        rotation="0 -7.15 0"
      ></meta-gltf>
    `;
  }
}
