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

  @propertyLit({ type: Boolean })
  private embedded = false;

  @propertyLit()
  private serverURL = 'https://networked.pinser-metaverse.com';

  @propertyLit()
  private adapter = 'easyrtc';

  @propertyLit({ type: Boolean })
  private audio = true;

  @propertyLit({ type: Boolean })
  private video = false;

  @propertyLit({ type: Boolean })
  private development = false;

  private connectOnLoad = false;

  override connectedCallback() {
    super.connectedCallback();

    if (this.session) {
      if (
        !/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/.test(
          this.session.toUpperCase()
        )
      ) {
        throw new Error('meta-scene: property "scene" not valid');
      }

      this.connectOnLoad = true;
    }
  }

  protected override createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  override render(): TemplateResult {
    return html`
      <a-scene
        ?debug=${this.development}
        ?embedded=${this.embedded}
        networked-scene="
          serverURL: ${this.serverURL};
          app: pinser-metaverse;
          room: ${this.session
          ? this.session.replace(/-/g, '').toLowerCase()
          : 'default'};
          adapter: ${this.adapter};
          audio: ${this.audio};
          video: ${this.video};
          debug: ${this.development};
          connectOnLoad: ${this.connectOnLoad};
        "
      >
        <meta-scene-container dev=${this.development}></meta-scene-container>
      </a-scene>
    `;
  }
}
