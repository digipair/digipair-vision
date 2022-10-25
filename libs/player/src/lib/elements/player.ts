/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  customElement,
  html,
  inject,
  MetaElement,
  nothing,
  property,
  TemplateResult,
  THREE,
  unsafeHTML,
} from '@pinser-metaverse/core';
import 'aframe-blink-controls';
import 'super-hands';
import { EventTeleport } from '../interfaces/event-teleport';
import { PlayerProvider } from '../providers/player.provider';
import '../utils/Geometry.js';
import '../utils/look-controls-custom.js';
import './avatar';
import './camera';
import './element';
import './menu';
import './teleportable-cursor';
import './toolbar';

declare const NAF: any;

@customElement('meta-player')
export class PlayerElement extends MetaElement {
  @property({ default: false })
  development!: boolean;

  @inject()
  playerProvider!: PlayerProvider;

  private vrmode!: boolean;
  private templates = [
    {
      id: 'avatar-template',
      content: `<a-entity meta-avatar networked-audio-source></a-entity>`,
    },
    {
      id: 'player-template',
      content: `<a-entity></a-entity>`,
    },
    {
      id: 'left-hand-template',
      content: `
        <a-entity>
          <a-gltf-model
            class="tracked-left-hand"
            rotation="0 0 90"
            src="https://assets.pinser-metaverse.com/objects/leftHandHigh.glb"
          ></a-gltf-model>
        </a-entity>
      `,
    },
    {
      id: 'right-hand-template',
      content: `
        <a-entity>
          <a-gltf-model
            class="tracked-right-hand"
            rotation="0 0 -90"
            src="https://assets.pinser-metaverse.com/objects/rightHandHigh.glb"
          ></a-gltf-model>
        </a-entity>
      `,
    },
  ];

  private defaultCamera(): TemplateResult {
    return html`
      <meta-player-camera vrmode=${this.vrmode}></meta-player-camera>
    `;
  }

  private defaultHandLeft(): typeof nothing {
    return nothing;
  }

  private defaultHandRight(): TemplateResult {
    return html`
      <meta-player-toolbar
        position="0 -0.03 0.15"
        rotation="0 -90 90"
      ></meta-player-toolbar>
    `;
  }

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

    player?.setAttribute('position', position);

    if (camera) {
      camera.setAttribute('position', '0 1.6 0');

      if (rotation) {
        const [rx, ry] = rotation.split(' ');

        (camera as any).components[
          'look-controls-custom'
        ].pitchObject.rotation.x = (THREE as any).Math.degToRad(+rx);
        (camera as any).components[
          'look-controls-custom'
        ].yawObject.rotation.y = (THREE as any).Math.degToRad(+ry);
      }
    }
  };

  override init(): void {
    this.vrmode = false;

    this.el.sceneEl?.addEventListener('enter-vr', this.entervr);
    this.el.sceneEl?.addEventListener('exit-vr', this.exitvr);
    this.playerProvider.el.addEventListener('teleport', this.teleport);

    this.initTemplates();
  }

  private initTemplates(): void {
    let assets = this.el.sceneEl?.querySelector(':scope > a-assets');
    if (!assets) {
      assets = document.createElement('a-assets');
      this.el.sceneEl?.appendChild(assets);
    }

    this.templates.forEach(({ id, content }) => {
      const template = document.createElement('template');
      template.setAttribute('id', id);
      template.innerHTML = content;
      assets?.appendChild(template);
    });

    NAF?.schemas.add({
      template: `#avatar-template`,
      components: [
        'position',
        'rotation',
        'meta-avatar',
        'networked-audio-source',
      ],
    });
  }

  override remove(): void {
    this.el.sceneEl?.removeEventListener('enter-vr', this.entervr);
    this.el.sceneEl?.removeEventListener('exit-vr', this.exitvr);
    this.playerProvider.el.removeEventListener('teleport', this.teleport);
  }

  override render(): TemplateResult {
    const templateCamera = this.el
      .closest(`meta-scene`)
      .querySelector(':scope > template[slot=camera]')?.innerHTML;
    const templateHandLeft = this.el
      .closest(`meta-scene`)
      .querySelector(':scope > template[slot=handleft]')?.innerHTML;
    const templateHandRight = this.el
      .closest(`meta-scene`)
      .querySelector(':scope > template[slot=handright]')?.innerHTML;

    return html`
      ${this.playerProvider.customcursor
        ? unsafeHTML(
            `<${this.playerProvider.customcursor} vrmode=${this.vrmode}></${this.playerProvider.customcursor}>`
          )
        : html`<meta-teleportable-cursor
            vrmode=${this.vrmode}
          ></meta-teleportable-cursor>`}
      ${!this.playerProvider.playermenu.visible
        ? nothing
        : html`<meta-player-menu
            position=${this.playerProvider.playermenu.position}
            rotation=${this.playerProvider.playermenu.rotation}
          ></meta-player-menu>`}

      <a-entity player networked="template: #player-template;">
        <a-entity
          position="0 1.6 0"
          camera="fov: 40; zoom: 1;"
          look-controls-custom="reverseMouseDrag: true; touchEnabled: true; magicWindowTrackingEnabled: false;"
          ?wasd-controls=${this.development}
          networked="template: #avatar-template;"
        >
          <a-entity
            raycaster="objects: [selectable];"
            cursor="rayOrigin: mouse; fuse: false;"
          ></a-entity>
          ${!templateCamera ? this.defaultCamera() : unsafeHTML(templateCamera)}
        </a-entity>

        ${!this.vrmode
          ? nothing
          : html`
              <a-entity
                super-hands=" colliderEvent: collisions;
                              colliderEventProperty: els;
                              colliderEndEvent: collisions;
                              colliderEndEventProperty: clearedEls;"
                physics-collider
                static-body="shape: sphere; sphereRadius: 0.02;"
                collision-filter="group: hand;"
                hand-controls="hand: left;"
                laser-controls="hand: left;"
                blink-controls="cameraRig: [player]; teleportOrigin: [camera]; collisionEntities: [teleportable]; snapTurn: false;"
                raycaster="objects: [selectable];"
                networked="template: #left-hand-template; attachTemplateToLocal: false;"
              >
                ${!templateHandLeft
                  ? this.defaultHandLeft()
                  : unsafeHTML(templateHandLeft)}
              </a-entity>
              <a-entity
                super-hands=" colliderEvent: collisions;
                              colliderEventProperty: els;
                              colliderEndEvent: collisions;
                              colliderEndEventProperty: clearedEls;"
                physics-collider
                static-body="shape: sphere; sphereRadius: 0.02;"
                collision-filter="group: hand;"
                hand-controls="hand: right;"
                laser-controls="hand: right;"
                blink-controls="cameraRig: [player]; teleportOrigin: [camera]; collisionEntities: [teleportable]; snapTurn: false;"
                raycaster="objects: [selectable];"
                networked="template: #right-hand-template; attachTemplateToLocal: false;"
              >
                ${!templateHandRight
                  ? this.defaultHandRight()
                  : unsafeHTML(templateHandRight)}
              </a-entity>
            `}

        <a-entity hand-tracking-controls="hand: left;"> </a-entity>
        <a-entity hand-tracking-controls="hand: right;"></a-entity>
      </a-entity>
    `;
  }
}
