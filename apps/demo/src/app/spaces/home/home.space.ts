import { html, MetaElement } from '@pinser-metaverse/core';
import '@pinser-metaverse/gltf';
import '@pinser-metaverse/html';
import { routeElement } from '@pinser-metaverse/router';
import './hyperbeam.component';
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

      <a-plane
        class="hyperbeam"
        selectable
        position="2 1.5 -1"
        rotation="0 -65 0"
        width="1.6"
        height="0.9"
        color="#000000"
        sound="src: #audio; autoplay: true; refDistance: 0.2; rolloffFactor: 3"
        hyperbeam
      ></a-plane>

      <audio id="audio" autoplay></audio>
      <!-- Remove autoplay when AFrame adds support for dynamic audio -->
      <div id="hbcontainer"></div>
    `;
  }
}
