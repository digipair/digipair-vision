import {
  customElement,
  html,
  MetaElement,
  nothing,
  property,
  TemplateResult,
} from '@pinser-metaverse/core';
import '../toolbar/toolbar';

@customElement('meta-player-camera')
export class PlayerCameraElement extends MetaElement {
  @property()
  vrmode!: boolean;

  override render(): TemplateResult {
    console.log('this.vrmode', this.vrmode, typeof this.vrmode);

    return html`
      <a-entity
        static-body="shape: sphere; sphereRadius: 0.02"
        collision-filter="group: player;"
      ></a-entity>

      ${this.vrmode
        ? nothing
        : html`
            <meta-player-toolbar
              position="0 -0.175 -0.5"
              scale="0.5 0.5 0.5"
            ></meta-player-toolbar>
          `}
    `;
  }
}
