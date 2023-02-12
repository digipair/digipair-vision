import '@pinser-metaverse/camrender';
import { html, inject, MetaElement } from '@pinser-metaverse/core';
import '@pinser-metaverse/html';
import '@pinser-metaverse/mesh';
import { routeElement } from '@pinser-metaverse/router';
import { SessionProvider } from '../../session.provider';
import './title.element';

@routeElement('home-space')
export class HomeSpaceElement extends MetaElement {
  @inject()
  sessionProvider: SessionProvider;

  override init(): void {
    this.sessionProvider.startSession('60a9f2ef-c64a-4b0d-9068-33ce2008baef');
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

      <meta-html position="-0.23 1.8 -1" scale="1 1 1" width="450px">
        <template>
          <home-title></home-title>
        </template>
      </meta-html>

      <a-gltf-model
        position="0.268 1.4 -1"
        rotation="0 0 0"
        scale="0.1 0.1 0.1"
        src="https://agency-experiences.onrender.com/assets/spaces/home/home.glb"
      >
        <meta-mesh
          object="Empty001"
          selectable
          animation__mouseenter="property: scale; to: 1.03 1.03 1.03; startEvents: mouseenter; dur: 500; easing: easeOutElastic;"
          animation__mouseleave="property: scale; to: 1 1 1; startEvents: mouseleave; dur: 500; easing: easeOutElastic;"
        ></meta-mesh>
        <meta-mesh
          object="Sphere037"
          selectable
          animation__mouseenter="property: scale; to: 1.03 1.03 1.03; startEvents: mouseenter; dur: 500; easing: easeOutElastic;"
          animation__mouseleave="property: scale; to: 1 1 1; startEvents: mouseleave; dur: 500; easing: easeOutElastic;"
        ></meta-mesh>
        <meta-mesh
          object="Plane087"
          selectable
          animation__mouseenter="property: scale; to: 1.03 1.03 1.03; startEvents: mouseenter; dur: 500; easing: easeOutElastic;"
          animation__mouseleave="property: scale; to: 1 1 1; startEvents: mouseleave; dur: 500; easing: easeOutElastic;"
        ></meta-mesh>
        <meta-mesh
          object="Sphere020"
          selectable
          animation__mouseenter="property: scale; to: 1.03 1.03 1.03; startEvents: mouseenter; dur: 500; easing: easeOutElastic;"
          animation__mouseleave="property: scale; to: 1 1 1; startEvents: mouseleave; dur: 500; easing: easeOutElastic;"
        ></meta-mesh>

        <meta-mesh
          object="Plane092"
          animation="property: position; to: -0.2 -0.1 0; dur: 2000; easing: linear; dir: alternate; loop: true;"
        ></meta-mesh>
        <meta-mesh
          object="Plane093"
          animation="property: position; to: -0.1 -0.1 0; dur: 1500; easing: linear; dir: alternate; loop: true;"
        ></meta-mesh>
        <meta-mesh
          object="Plane094"
          animation="property: position; to: -0.1 -0.2 0; dur: 3000; easing: linear; dir: alternate; loop: true;"
        ></meta-mesh>
        <meta-mesh
          object="Circle033"
          animation="property: position; to: -0.2 -0.2 0; dur: 2500; easing: linear; dir: alternate; loop: true;"
        ></meta-mesh>
      </a-gltf-model>

      <a-gltf-model
        src="https://agency-experiences.onrender.com/assets/man.glb"
        position="0.052 1.388 -0.98"
        scale="0.15 0.15 0.15"
        rotation="0 -7.15 0"
      >
        <meta-mesh-animation-mixer
          object="Scene"
          shared="true"
          url="https://agency-experiences.onrender.com/assets/animations.glb"
          mixer="clip: IDLE;"
          selectable
          animation__mouseenter="property: scale; to: 1.03 1.03 1.03; startEvents: mouseenter; dur: 500; easing: easeOutElastic;"
          animation__mouseleave="property: scale; to: 1 1 1; startEvents: mouseleave; dur: 500; easing: easeOutElastic;"
        ></meta-mesh-animation-mixer>
      </a-gltf-model>

      <meta-camrender-camera position="0 1.6 0"></meta-camrender-camera>
      <meta-camrender-screen
        position="1.5 1.6 1"
        rotation="0 -135 0"
      ></meta-camrender-screen>
    `;
  }
}
