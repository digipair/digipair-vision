import {
  customElement,
  html,
  MetaElement,
  property,
  TemplateResult,
} from '@pinser-metaverse/core';

@customElement('meta-screen-shared-webcam')
export class ScreenSharedWebcamElement extends MetaElement {
  @property()
  screenid!: string;

  override render(): TemplateResult {
    return html`
      <a-plane
        width="1.6"
        height="0.9"
        material=${`src: #screen-shared-${this.screenid};`}
        networked-video-source
      ></a-plane>
    `;
  }
}
