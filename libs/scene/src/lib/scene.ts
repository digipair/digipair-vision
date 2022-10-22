import {
  customLitElement,
  html,
  LitElement,
  propertyLit,
  TemplateResult,
} from '@pinser-metaverse/core';
import 'aframe-extras';
import 'aframe-physics-extras';
import 'aframe-physics-system/dist/aframe-physics-system.js';
import 'aframe-rounded';
import 'networked-aframe';
import './scene-container';

@customLitElement('meta-scene')
export class SceneElement extends LitElement {
  @propertyLit()
  private session!: string;

  @propertyLit()
  private server = 'https://networked.pinser-metaverse.com';

  @propertyLit()
  private adapter = 'easyrtc';

  @propertyLit({ type: Boolean })
  private development = false;

  protected override createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  override render(): TemplateResult {
    return html`
      <a-scene ?debug=${this.development} ar-hit-test="footprintDepth: 1;">
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
