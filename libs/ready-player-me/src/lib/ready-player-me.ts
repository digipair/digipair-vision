import {
  customElement,
  html,
  MetaElement,
  property,
  TemplateResult,
} from '@pinser-metaverse/core';
import '@pinser-metaverse/gltf';

@customElement('meta-ready-player-me')
export class ReadyPlayerMeElement extends MetaElement {
  @property()
  playerinfo: any;

  override render(): TemplateResult {
    return html`
      <a-rounded
        color="#ffffff"
        width="0.6"
        radius="0.05"
        height="0.1"
        position="-0.3 0.85 -0.02"
      >
        <a-text
          color="#424242"
          value=${this.playerinfo.username}
          position="0.3 0.052 0"
          align="center"
          width="1.8"
        ></a-text>
        <a-text
          color="#424242"
          value=${this.playerinfo.username}
          position="0.3 0.052 0"
          rotation="0 180 0"
          align="center"
          width="1.8"
        ></a-text>
      </a-rounded>

      <meta-gltf-static
        url=${this.playerinfo.avatar}
        position="0 0 -0.02"
        meshes=${JSON.stringify({
          LeftHand: { scale: { x: 0, y: 0, z: 0 } },
          RightHand: { scale: { x: 0, y: 0, z: 0 } },
        })}
      ></meta-gltf-static>
    `;
  }
}
