/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  customElement,
  html,
  inject,
  MetaElement,
  nothing,
  TemplateResult,
  THREE,
} from '@pinser-metaverse/core';
import 'aframe-blink-controls';
import 'super-hands';
import { EventTeleport } from '../interfaces/event-teleport';
import { PlayerProvider } from '../providers/player.provider';
import '../utils/Geometry.js';
import './avatar';

@customElement('meta-player')
export class PlayerElement extends MetaElement {
  @inject()
  playerProvider!: PlayerProvider;

  private vrmode = false;
  private readonly entervr = () => {
    this.vrmode = true;
    this.requestUpdate();
  };
  private readonly exitvr = () => {
    this.vrmode = false;
    this.requestUpdate();
  };

  private readonly teleport = ({ detail }: CustomEventInit<EventTeleport>) => {
    const { position, rotation } = detail as EventTeleport;

    const player = this.el.querySelector('[player]');
    const camera = this.el.querySelector('[camera]');
    const [rx, ry] = rotation.split(' ');

    player?.setAttribute('position', position);

    if (camera) {
      camera.setAttribute('position', '0 1.6 0');
      (camera as any).components['look-controls'].pitchObject.rotation.x = (
        THREE as any
      ).Math.degToRad(+rx);
      (camera as any).components['look-controls'].yawObject.rotation.y = +ry;
    }
  };

  override init(): void {
    this.el.sceneEl?.addEventListener('enter-vr', this.entervr);
    this.el.sceneEl?.addEventListener('exit-vr', this.exitvr);
    this.playerProvider.el.addEventListener('teleport', this.teleport);
  }

  override remove(): void {
    this.el.sceneEl?.removeEventListener('enter-vr', this.entervr);
    this.el.sceneEl?.removeEventListener('exit-vr', this.exitvr);
    this.playerProvider.el.removeEventListener('teleport', this.teleport);
  }

  override render(): TemplateResult {
    return html`
      <assets>
        <!-- Camera Rig / Player -->
        <template id="player-template">
          <a-entity></a-entity>
        </template>

        <!-- Head / Avatar -->
        <template id="avatar-template">
          <a-entity meta-avatar networked-audio-source></a-entity>
        </template>

        <!-- Hands -->
        <template id="left-hand-template">
          <a-entity>
            <a-gltf-model
              class="tracked-left-hand"
              rotation="0 0 90"
              src="https://assets.pinser-metaverse.com/objects/leftHandHigh.glb"
            ></a-gltf-model>
          </a-entity>
        </template>
        <template id="right-hand-template">
          <a-entity>
            <a-gltf-model
              class="tracked-right-hand"
              rotation="0 0 -90"
              src="https://assets.pinser-metaverse.com/objects/rightHandHigh.glb"
            ></a-gltf-model>
          </a-entity>
        </template>
      </assets>

      <a-entity
        player
        networked="template: #player-template; attachTemplateToLocal: false;"
      >
        <a-entity
          position="0 1.6 0"
          camera="fov: 40; zoom: 1;"
          look-controls="reverseMouseDrag: true; touchEnabled: false; magicWindowTrackingEnabled: false;"
          wasd-controls
          networked="template: #avatar-template; attachTemplateToLocal: false;"
        >
          <a-entity
            raycaster="objects: [selectable];"
            cursor="rayOrigin: mouse; fuse: false;"
          ></a-entity>
        </a-entity>

        ${!this.vrmode
          ? nothing
          : html`
              <a-entity
                super-hands
                sphere-collider="objects: a-box"
                static-body="shape: sphere; sphereRadius: 0.02"
                hand-controls="hand: left"
                laser-controls="hand: left;"
                blink-controls="cameraRig: [player]; teleportOrigin: [camera]; collisionEntities: [teleportable]; snapTurn: false;"
                raycaster="objects: [selectable];"
                networked="template: #left-hand-template; attachTemplateToLocal: false;"
              ></a-entity>
              <a-entity
                super-hands
                sphere-collider="objects: a-box"
                static-body="shape: sphere; sphereRadius: 0.02"
                hand-controls="hand: right"
                laser-controls="hand: right;"
                blink-controls="cameraRig: [player]; teleportOrigin: [camera]; collisionEntities: [teleportable]; snapTurn: false;"
                raycaster="objects: [selectable];"
                networked="template: #right-hand-template; attachTemplateToLocal: false;"
              ></a-entity>
            `}

        <!--
        <a-entity hand-tracking-controls="hand: left;"> </a-entity>
        <a-entity hand-tracking-controls="hand: right;"></a-entity>
        -->
      </a-entity>
    `;
  }
}
