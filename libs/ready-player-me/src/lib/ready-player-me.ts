import {
  customElement,
  html,
  MetaElement,
  property,
  TemplateResult,
} from '@digipair-vision/core';
import '@digipair-vision/mesh';

@customElement('meta-ready-player-me')
export class ReadyPlayerMeElement extends MetaElement {
  @property()
  playerinfo: any;

  override render(): TemplateResult {
    return html`
      <a-entity position="0 -0.65 0.05" rotation="0 180 0">
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

        <a-gltf-model src=${this.playerinfo.avatar} position="0 0 -0.04">
          <meta-mesh object="LeftHand" scale="0 0 0"></meta-mesh>
          <meta-mesh object="RightHand" scale="0 0 0"></meta-mesh>
        </a-gltf-model>
      </a-entity>
    `;
  }
}
