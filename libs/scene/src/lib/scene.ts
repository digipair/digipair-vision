import {
  customHtmlElement,
  html,
  MetaHtmlElement,
  propertyHtml,
  TemplateResult,
} from '@digipair-vision/core';
import 'aframe-extras';
import 'aframe-gradient-sky';
import 'aframe-physics-extras';
import 'aframe-physics-system/dist/aframe-physics-system.js';
import 'aframe-rounded';
import 'networked-aframe';
import './scene-container';

@customHtmlElement('meta-scene')
export class SceneElement extends MetaHtmlElement {
  @propertyHtml()
  private session!: string;

  @propertyHtml()
  private server = 'https://networked.pinser-metaverse.com';

  @propertyHtml()
  private draco = 'https://assets.pinser-metaverse.com/draco/';

  @propertyHtml()
  private adapter = 'easyrtc';

  @propertyHtml({ type: Boolean })
  private development = false;

  @propertyHtml({ type: Boolean })
  private debugphysics = false;

  override render(): TemplateResult {
    return html`
      <a-scene
        keyboard-shortcuts="enterVR: false"
        physics=${`debug: ${this.debugphysics}; driver: local;`}
        ?debug=${this.development}
        ?stats=${this.development}
        ar-hit-test="footprintDepth: 1;"
        gltf-model=${`dracoDecoderPath: ${this.draco};`}
      >
        <meta-scene-container
          session=${this.session}
          server=${this.server}
          adapter=${this.adapter}
          development=${this.development}
        ></meta-scene-container>
      </a-scene>
    `;
  }
}
