import {
  customLitElement,
  html,
  LitElement,
  nothing,
  propertyLit,
  stateLit,
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
  private video = true;

  @propertyLit({ type: Boolean })
  private development = false;

  @stateLit()
  private mediaDevicesChecked = false;

  private audioChecked = false;
  private videoChecked = false;

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

    this.checkMediaDevices();
  }

  protected override createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  private async checkMediaDevices() {
    if (this.audio || this.video) {
      const devices = await navigator.mediaDevices.enumerateDevices();
      this.audioChecked =
        this.audio &&
        devices.filter(({ kind }) => kind === 'audioinput').length > 0;
      this.videoChecked =
        this.video &&
        devices.filter(({ kind }) => kind === 'videoinput').length > 0;
    }

    this.mediaDevicesChecked = true;
  }

  override render(): TemplateResult {
    console.log('-', this.videoChecked, this.audioChecked);
    return html` ${!this.mediaDevicesChecked
      ? nothing
      : html`
          <a-scene
            ?debug=${this.development}
            ?embedded=${this.embedded}
            ar-hit-test="target: meta-scene-container; footprintDepth: 1;"
            networked-scene=${`
              serverURL: ${this.serverURL};
              app: pinser-metaverse;
              room: ${
                this.session
                  ? this.session.replace(/-/g, '').toLowerCase()
                  : 'default'
              };
              adapter: ${this.adapter};
              audio: ${this.audioChecked};
              video: ${this.videoChecked};
              debug: ${this.development};
              connectOnLoad: ${this.connectOnLoad};
            `}
          >
            <meta-scene-container
              dev=${this.development}
            ></meta-scene-container>
          </a-scene>
        `}`;
  }
}
